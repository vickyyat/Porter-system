import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomComponent }    from './room.component';

const heroesRoutes: Routes = [
  { path: 'rooms',  component: Room },
];
@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroRoutingModule { }
