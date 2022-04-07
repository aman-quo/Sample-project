import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;
  submitted = false;
  hide = true;
  constructor(
    private fb: FormBuilder,
    private user: UserService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name:['',Validators.required],
      DOB: ['', Validators.required],
      interests: ['', Validators.required],
      location: ['', Validators.required],
    });
  }
  onSubmit() {
    this.submitted = true;
    let reqData = {
      name: this.profileForm.value.name,
      DOB: this.profileForm.value.DOB,
      interests: this.profileForm.value.interests,
      location: this.profileForm.value.location
    };
    this.user.Profile(reqData).subscribe({
      next: (res: any) => {
        this.snackBar.open(`${res.message}`, '', {
          duration: 3000, verticalPosition: 'bottom',
          horizontalPosition: 'left'
        })
        this.router.navigate(['/about']);
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
