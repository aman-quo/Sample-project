import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../../service/user/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  hide = true;

  constructor(
    private fb: FormBuilder,
    private user: UserService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onSubmit() {
    this.submitted = true;
    let reqData = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    return this.user.Login(reqData).subscribe({
      next: (res: any) => {
        this.snackBar.open(`${res.message}`, '', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'left',
        });
        localStorage.setItem('token', res.data)
        console.log(res)
        this.router.navigate(['/profile']);
      },
      error: (error) => {
        console.log(error.message);
        this.snackBar.open(`${error.error.message}`, '', {
          duration: 3000, verticalPosition: 'bottom',
          horizontalPosition: 'left'
        })
      }
    });
  }
}