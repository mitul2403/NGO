import { UserViewComponent } from './user-view/user-view.component';
import { EventManagementComponent } from './event-management/event-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
  // {path: '', component: MainNavComponent },
  {path: 'usermanagement', component: UserManagementComponent},
  {path: 'eventmanagement', component: EventManagementComponent},
  {path: 'userview', component: UserViewComponent}];
