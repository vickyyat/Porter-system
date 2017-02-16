import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomListComponent } from './components/room-list/room-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavigationComponent } from './components/navigation.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'index', component: RoomListComponent },
  { path: 'register', component: RegisterComponent},
  { path: '', component: NavigationComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
