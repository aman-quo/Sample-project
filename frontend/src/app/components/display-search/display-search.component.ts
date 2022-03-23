import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../service/user/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-display-search',
  templateUrl: './display-search.component.html',
  styleUrls: ['./display-search.component.scss']
})

export class DisplaySearchComponent implements OnInit {
  displayedColumns: string[] = ['name', 'DOB', 'interests', 'location', 'action'];
  constructor(private user: UserService, private snackBar: MatSnackBar) { }
  @Input() dataSource: any;
  ngOnInit(): void {
  }
  addContact(_id: string) {
    this.user.Contact(_id).subscribe((res: any) => {
      this.snackBar.open(`${res.message}`, '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left',
      });
      console.log(res);
    }, (err) => {
      console.log(err.message);
    }
    )
  }
}
