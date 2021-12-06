import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss'],
})
export class AdminLoginComponent implements OnInit {
  alertMessage: string;
  alertType: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.authService.adminSignIn(form.value).subscribe(
      (response) => {
        this.router.navigate(['/admin/dashboard']);
      },
      (error) => {
        this.alertMessage = error;
        this.alertType = 'danger';
      }
    );
  }

  closeAlert() {
    this.alertMessage = null;
    this.alertType = null;
  }
}
