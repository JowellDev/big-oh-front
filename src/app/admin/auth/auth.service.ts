import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../../shared/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  signin_url: string = 'http://localhost:3000/auth/login';

  user = new BehaviorSubject<User>(null);
  tokenExpirationTimer: any;

  constructor(private http: HttpClient, private router: Router) {}

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

  autoLogin() {
    const userData: {
      email: string;
      id: number;
      _token: string;
      expirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }

    const { email, id, _token, expirationDate } = userData;

    const loadedUser = new User(id, email, _token, new Date(expirationDate));

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
    this.router.navigate(['/login']);
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
    const user: User = new User(_user.id, _user.email, token, expirationDate);

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
