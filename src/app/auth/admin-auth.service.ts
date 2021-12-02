import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Admin } from '../shared/admin.model';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthService {
  signin_url: string = 'http://localhost:3000/admin/login';

  admin = new BehaviorSubject<Admin>(null);
  tokenExpirationTimer: any;

  constructor(private http: HttpClient, private router: Router) {}

  signIn(admin: { email: string; password: string }) {
    const data: SignupData = {
      email: admin.email,
      password: admin.password,
    };

    return this.http.post<AuthResponseData>(this.signin_url, data).pipe(
      this.customCatchError(),
      tap((resData: AuthResponseData) => {
        const { user, token } = resData;
        this.handleAuthentication(user, token);
      })
    );
  }

  autoLogin() {
    const adminData: {
      email: string;
      id: number;
      isAdmin: boolean;
      isSuperAdmin: boolean;
      _token: string;
      expirationDate: string;
    } = JSON.parse(localStorage.getItem('adminData'));
    if (!adminData) {
      return;
    }

    const { email, id, isAdmin, isSuperAdmin, _token, expirationDate } =
      adminData;

    const loadedUser = new Admin(
      id,
      email,
      isAdmin,
      isSuperAdmin,
      _token,
      new Date(expirationDate)
    );

    if (loadedUser.token) {
      const expireIn =
        new Date(expirationDate).getTime() - new Date().getTime();
      this.admin.next(loadedUser);
      this.autoLogout(expireIn);
    }
  }

  logout() {
    this.admin.next(null);
    localStorage.removeItem('adminData');
    this.router.navigate(['/admin/login']);
    if (this.tokenExpirationTimer) {
      clearInterval(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private handleAuthentication(_admin: Admin, token: string) {
    const expirationDate = new Date(new Date().getTime() + 3600 * 1000 * 24);
    const admin: Admin = new Admin(
      _admin.id,
      _admin.email,
      _admin.isAdmin,
      _admin.isSuperAdmin,
      token,
      expirationDate
    );

    this.admin.next(admin);
    localStorage.setItem('adminData', JSON.stringify(admin));
    this.autoLogout(3600 * 1000 * 24);
  }

  customCatchError() {
    return catchError((errorRes) => {
      return throwError(errorRes.error.message);
    });
  }
}

interface SignupData {
  email: string;
  password: string;
}

export interface AuthResponseData {
  token: string;
  user: any;
}
