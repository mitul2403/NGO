import { routes } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { AdminComponent } from './admin/admin.component';
import {MatToolbarModule} from '@angular/material/toolbar';
=======
import {MatToolbarModule} from '@angular/material/toolbar';
import '@angular/material/prebuilt-themes/indigo-pink.css';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventManagementComponent } from './event-management/event-management.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
>>>>>>> fa920c35fefcdcce94e346e9b67fb86545aaac4f

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
<<<<<<< HEAD
    AdminComponent,MynavComponent, LoginComponent, RegisterComponent
  ],
  imports: [
    BrowserModule,CommonModule,
    MatToolbarModule,BrowserAnimationsModule,
    MatCheckboxModule,MatSidenavModule,MatButtonModule,
    MatIconModule,MatListModule,MatInputModule,FormsModule,
   ReactiveFormsModule,MatDialogModule,
   HttpClientModule
=======
    MainNavComponent,
    EventManagementComponent,
    UserViewComponent,
    UserManagementComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, MatToolbarModule, LayoutModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, BrowserAnimationsModule
    , RouterModule.forRoot(routes)
>>>>>>> fa920c35fefcdcce94e346e9b67fb86545aaac4f
  ],
  providers: [LoginService],
  bootstrap: [AppComponent],
  entryComponents:[LoginComponent]
})
export class AppModule { }
