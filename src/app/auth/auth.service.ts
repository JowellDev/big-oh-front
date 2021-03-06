import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../shared/user.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  signup_url: string = `${environment.apiUrl}/auth/register`;
  signin_url: string = `${environment.apiUrl}/auth/login`;
  admin_signin_url: string = `${environment.apiUrl}/admin/login`;

  user = new BehaviorSubject<User>(null);
  tokenExpirationTimer: any;

  constructor(private http: HttpClient, private router: Router) {}

  signUp(user: { email: string; password: string }) {
    const data: SignupData = {
      email: user.email,
      password: user.password,
    };

    return this.http.post<AuthResponseData>(this.signup_url, data).pipe(
      this.customCatchError(),
      tap((resData: AuthResponseData) => {
        console.log(resData);
        const { user, token } = resData;
        this.handleAuthentication(user, token);
      })
    );
  }

  signIn(user: { email: string; password: string }) {
    const data: SignupData = {
      email: user.email,
      password: user.password,
    };

    return this.http.post<AuthResponseData>(this.signin_url, data).pipe(
      this.customCatchError(),
      tap((resData: AuthResponseData) => {
        const { user, token } = resData;
        this.handleAuthentication(user, token);
      })
    );
  }

  adminSignIn(user: { email: string; password: string }) {
    const data: SignupData = {
      email: user.email,
      password: user.password,
    };

    return this.http.post<AuthResponseData>(this.admin_signin_url, data).pipe(
      this.customCatchError(),
      tap((resData: AuthResponseData) => {
        const { user, token } = resData;
        this.handleAuthentication(user, token);
      })
    );
  }

  autoLogin() {
    const userData: {
      email: string;
      id: number;
      isAdmin: boolean;
      isSuperAdmin: boolean;
      _token: string;
      expirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }

    const { email, id, isAdmin, isSuperAdmin, _token, expirationDate } =
      userData;

    const loadedUser = new User(
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
      this.user.next(loadedUser);
      this.autoLogout(expireIn);
    }
  }

  logout() {
    this.user.next(null);
    localStorage.removeItem('userData');
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

  private handleAuthentication(_user: User, token: string) {
    const expirationDate = new Date(new Date().getTime() + 3600 * 1000 * 24);
    const user: User = new User(
      _user.id,
      _user.email,
      _user.isAdmin,
      _user.isSuperAdmin,
      token,
      expirationDate
    );

    this.user.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
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
