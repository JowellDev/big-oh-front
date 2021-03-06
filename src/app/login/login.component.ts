import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  alertMessage: string;
  alertType: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.authService.signIn(form.value).subscribe(
      (response) => {
        this.router.navigate(['/articles']);
      },
      (error) => {
        this.alertMessage = error;
        this.alertType = 'danger';
      }
    );
  }

  closeAlert() {
    this.alertMessage = null;
  }
}
