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
  users = [];
  subscription: Subscription;
  pageItems: number = 10;
  paginationCurrentPage: number = 1;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.subscription = this.usersService
      .getAllMembers()
      .subscribe((members: User[]) => {
        this.users = members;
      });
  }

  activeAccount(userEmail) {
    this.usersService.activeAccount(userEmail).subscribe(
      (res) => {
        const user = this.users.find((user) => user.email === userEmail);
        user.isActive = !user.isActive;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
