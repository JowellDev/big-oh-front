import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Admin } from '../shared/admin.model';
import { User } from '../shared/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: User[];
  userChanged = new Subject<User>();
  usersChanged = new Subject<User[]>();
  baseURL: string = 'http://localhost:3000/admin';
  constructor(private http: HttpClient, private router: Router) {}

  getAllMembers() {
    return this.http.get<User[]>(`${this.baseURL}/all-members`);
  }

  getAllAdmins() {
    return this.http.get<Admin[]>(`${this.baseURL}/list`);
  }
}
