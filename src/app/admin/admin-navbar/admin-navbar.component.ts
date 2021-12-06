import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/user.model';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss'],
})
export class AdminNavbarComponent implements OnInit, OnDestroy {
  isAuth: boolean;
  admin: User;
  subscription: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.authService.user.subscribe((admin) => {
      this.isAuth = !!admin;
      this.admin = admin;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/admin/login']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
