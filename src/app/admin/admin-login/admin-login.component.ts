import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss'],
})
export class AdminLoginComponent implements OnInit {
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.authService.signIn(form.value).subscribe(
      (response) => {
        this.router.navigate(['/admin/dashboard']);
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
