import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { UserService } from '../../service/user/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-search-interests',
  templateUrl: './search-interests.component.html',
  styleUrls: ['./search-interests.component.scss']
})
export class SearchInterestsComponent implements OnInit {
  searchForm!: FormGroup;
  submitted = false;
  constructor(private user: UserService, private fb: FormBuilder, private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      interests: ['', Validators.required]
    });
  }
  onSubmit() {
    this.submitted = true;
    let reqData = {
      interests: this.searchForm.value.interests,
    };
    this.user.Search(reqData).subscribe(
      (res: any) => {
        this.snackBar.open(`${res.message}`, '', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'left',
        });
      },
      (err) => {
        console.log(err.message);
      }
    );
  }
}
