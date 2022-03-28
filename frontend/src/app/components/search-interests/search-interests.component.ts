import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  searchData:any
  constructor(private user: UserService, private fb: FormBuilder, private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      interests: ['', Validators.required]
    });
  }
  onSubmit() {
    this.submitted = true;
      let interests= this.searchForm.value.interests;
    this.user.Search(interests).subscribe(
      (res: any) => {
        this.snackBar.open(`${res.message}`, '', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'left',
        });
        console.log(res);
        this.searchData=res.data;
      },
      (error) => {
        console.log(error.message);
        this.snackBar.open(`${error.error.message}`, '', {duration: 3000 ,verticalPosition: 'bottom',
          horizontalPosition: 'left' })
      }
    );
  }
}
