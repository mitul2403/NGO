import { Component } from '@angular/core';
<<<<<<< HEAD
import {MatDialog, MatDialogConfig} from '@angular/material'
import {LoginComponent} from  '../app/login/login.component'
=======
import {MatToolbarModule} from '@angular/material/toolbar';
>>>>>>> fa920c35fefcdcce94e346e9b67fb86545aaac4f

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private dialog: MatDialog) { }
  opendialog(){
    const dialogconfig = new MatDialogConfig();
    dialogconfig.disableClose= true;
    dialogconfig.autoFocus= true;

    this.dialog.open( LoginComponent, dialogconfig);


  }

  title = 'NGOapp';
}
