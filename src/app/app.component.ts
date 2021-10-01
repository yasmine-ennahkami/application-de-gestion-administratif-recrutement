import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { config } from 'rxjs';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';

  constructor(public dialog: MatDialog) {}

  login() {
    console.log("login")
    const dialogRef = this.dialog.open(
      FirstComponent,
      {
        minWidth: "900",
        data: "hi firstComponent"
      },
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  signin() {
    console.log("signin")
    const dialogRef = this.dialog.open(
      SecondComponent,
      {
        minWidth: "900",
        data: "hi sencondComponent"
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
