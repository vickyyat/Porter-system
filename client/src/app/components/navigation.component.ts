import { Component } from '@angular/core';

@Component({
  template: `
  <nav class="mdl-navigation">
    <a class="mdl-navigation__link" [routerLink]="['/login']">Login</a>
    <a class="mdl-navigation__link" [routerLink]="['/register']">Register</a>
  </nav>`
})
export class NavigationComponent { }
