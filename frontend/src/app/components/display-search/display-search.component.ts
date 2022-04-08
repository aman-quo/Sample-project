import { Component, Input } from '@angular/core';
import { UserService } from '../../service/user/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-display-search',
  templateUrl: './display-search.component.html',
  styleUrls: ['./display-search.component.scss']
})

export class DisplaySearchComponent {
  displayedColumns: string[] = ['name', 'DOB', 'interests', 'location', 'action'];
  constructor(private user: UserService, private snackBar: MatSnackBar) {}

  @Input() dataSource: any;

  addContact(_id: string) {
    this.user.Contact(_id).subscribe({
      next:(res: any) => {
        this.snackBar.open(`${res.message}`, '', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'left',
        });
        console.log(res);
      }, 
      error:(error) => {
        console.log(error.message);
        this.snackBar.open(`${error.error.message}`, '', {
          duration: 3000, verticalPosition: 'bottom',
          horizontalPosition: 'left'
        })
      }
  })
  }
}
