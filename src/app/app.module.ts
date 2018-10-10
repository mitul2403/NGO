import { routes } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    EventManagementComponent,
    UserViewComponent,
    UserManagementComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, MatToolbarModule, LayoutModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, BrowserAnimationsModule
    , RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
