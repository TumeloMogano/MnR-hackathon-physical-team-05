import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../services/auth.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../models/model';

@Component({
  selector: 'app-signup',
  imports: [RouterLink, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
  standalone: true
})
export class Signup {
  signupFormGroup!: FormGroup;
  user: User = new User();
  SignupError = false;

  constructor(private auth: Auth, private router: Router, private _formBuilder: FormBuilder){
    this.signupFormGroup = _formBuilder.group({
      name: [Validators.required],
      email: [Validators.required, Validators.email],
      password: [
        Validators.required,
        Validators.pattern(
          '/^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$/'
        ),
      ]
    })
  }

  Signup(){
    if(this.signupFormGroup.invalid){
      this.SignupError = true;
      return;
    }

    this.auth.SignUpUser(this.user).subscribe({
      next: res => {
        this.router.navigate(['/Login'])
      },
      error: err => {
        console.log(err)
      }
    })
  }


}
