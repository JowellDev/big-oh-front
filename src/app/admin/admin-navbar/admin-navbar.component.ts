import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminAuthService } from 'src/app/auth/admin-auth.service';
import { Admin } from 'src/app/shared/admin.model';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss'],
})
export class AdminNavbarComponent implements OnInit, OnDestroy {
  isAuth: boolean;
  admin: Admin;
  subscription: Subscription;

  constructor(private adminAuth: AdminAuthService) {}

  ngOnInit(): void {
    this.subscription = this.adminAuth.admin.subscribe((admin) => {
      this.isAuth = !!admin;
      this.admin = admin;
    });
  }

  logout() {
    this.adminAuth.logout();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
