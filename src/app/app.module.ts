import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatCheckboxModule} from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import '@angular/material/prebuilt-themes/indigo-pink.css';


import {MatSidenavModule,MatButtonModule,MatListModule,MatIconModule} from '@angular/material';
// import{MynavComponent}from './mynav/mynav.component';
// import {} from '@angular/material';

// import { MdToolbarModule,MdToolbarRow } from '@angular/material/toolbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{MynavComponent} from './mynav/mynav.component';
import { LoginComponent } from './login/login.component'
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material';
import {LoginService} from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
// import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,MynavComponent, LoginComponent, RegisterComponent
  ],
  imports: [
    BrowserModule,CommonModule,
    MatToolbarModule,BrowserAnimationsModule,
    MatCheckboxModule,MatSidenavModule,MatButtonModule,
    MatIconModule,MatListModule,MatInputModule,FormsModule,
   ReactiveFormsModule,MatDialogModule,
   HttpClientModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent],
  entryComponents:[LoginComponent]
})
export class AppModule { }
