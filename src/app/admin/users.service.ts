import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Subject, throwError } from 'rxjs';
import { User } from '../shared/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: User[];
  userChanged = new Subject<User>();
  usersChanged = new Subject<User[]>();
  adminsChanged = new Subject<User>();

  baseURL: string = 'http://localhost:3000/admin';
  constructor(private http: HttpClient, private router: Router) {}

  getAllMembers() {
    return this.http.get<User[]>(`${this.baseURL}/all-members`);
  }

  getAllAdmins() {
    return this.http.get<User[]>(`${this.baseURL}/list`);
  }

  addAdmin(data: { email: string; password: string }) {
    return this.http.post(`${this.baseURL}/create-admin`, data).pipe(
      catchError((response) => {
        return throwError(response.error.message);
      }),
      map((admin) => {
        return admin;
      })
    );
  }

  removeAdmin(id: string) {
    return this.http.delete(`${this.baseURL}/delete-admin/${id}`).pipe(
      catchError((response) => {
        return throwError(response.error.message);
      }),
      map((admin) => {
        return admin;
      })
    );
  }

  activeAccount(email: string) {
    const opts = { params: new HttpParams().set('email', email) };
    return this.http.put(`${this.baseURL}/change-user-status`, {}, opts).pipe(
      catchError((response) => {
        return throwError(response.error.message);
      }),
      map((user) => {
        return user;
      })
    );
  }
}
