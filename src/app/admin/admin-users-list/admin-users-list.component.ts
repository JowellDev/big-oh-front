import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-admin-users-list',
  templateUrl: './admin-users-list.component.html',
  styleUrls: ['./admin-users-list.component.scss'],
})
export class AdminUsersListComponent implements OnInit {
  users: User[] = [];
  subscription: Subscription;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.subscription = this.usersService
      .getAllMembers()
      .subscribe((members: User[]) => {
        this.users = members;
      });
  }
}
