import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from './auth/admin-auth.service';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'bigoh';

  constructor(
    private authService: AuthService,
    private adminService: AdminAuthService
  ) {}

  ngOnInit(): void {
    this.authService.autoLogin();
    this.adminService.autoLogin();
  }
}
