import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Admin } from 'src/app/shared/admin.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-admin-admins-list',
  templateUrl: './admin-admins-list.component.html',
  styleUrls: ['./admin-admins-list.component.scss'],
})
export class AdminAdminsListComponent implements OnInit {
  subscription: Subscription;
  admins: Admin[] = [];
  error: string;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.subscription = this.usersService
      .getAllAdmins()
      .subscribe((members: Admin[]) => {
        this.admins = members;
      });
  }

  addAdmin(form: NgForm) {
    const data = {
      email: form.value.email,
      password: form.value.password,
    };

    this.usersService.addAdmin(data).subscribe(
      (admin: Admin) => {
        this.admins.push(admin);
        form.reset();
      },
      (error) => {
        this.error = error;
      }
    );
  }

  removeAdmin(adminEmail) {
    this.usersService.removeAdmin(adminEmail).subscribe(
      (res) => {
        this.admins = this.admins.filter((admin) => admin.email !== adminEmail);
      },
      (error) => {
        this.error = error;
      }
    );
  }

  closeAlert() {
    this.error = null;
  }
}
