import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../services/auth.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone: true,
})
export class Login {
  loginFormGroup!: FormGroup;
  loginError = false;

  constructor(
    private _formBuilder: FormBuilder,
    private auth: Auth,
    private router: Router
  ) {
    this.loginFormGroup = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(
          '/^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$/'
        ),
      ]],
    });
  }


  Login() {

// Get values directly from the form group
  const email = this.loginFormGroup.value.email;
  const password = this.loginFormGroup.value.password;


    this.auth.LoginUser(email, password).subscribe({
      next: (res) => {
        this.loginError = false;
        localStorage.setItem('bearer', res.token);

        if (this.auth.isAuthenticatedUser()) {
          this.router.navigate(['/Dashboard']);
        }
      },
      error: (err) => {
        this.loginError = true;
        console.log();
      },
    });
  }
}
