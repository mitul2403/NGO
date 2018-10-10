import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material'
import {LoginComponent} from  '../app/login/login.component'
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
