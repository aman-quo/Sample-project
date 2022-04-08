import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signupForm!: FormGroup;
  submitted = false;
  hide = true;

  constructor(
    private fb: FormBuilder,
    private user: UserService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      phoneNo: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['', Validators.required],
    });
  }
  onSubmit() {
    console.log("on signup")
    this.submitted = true;
    if (this.signupForm.value.password != this.signupForm.value.confirm) {
      alert("password didn't match");
    }
    if (this.signupForm.valid) {
      let reqData = {
        phoneNo: this.signupForm.value.phoneNo,
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
      };
      this.user.Register(reqData).subscribe({
        next: (res: any) => {
          this.snackBar.open(`${res.message}`, '', {
            duration: 3000, verticalPosition: 'bottom',
            horizontalPosition: 'left'
          })
          this.router.navigate(['/login']);
        },
        error: (error) => {
          this.snackBar.open(`${error.error.message}`, '', {
            duration: 3000, verticalPosition: 'bottom',
            horizontalPosition: 'left'
          })
        }
      })
    }
  }
}
