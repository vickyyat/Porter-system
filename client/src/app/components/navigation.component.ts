import { Component } from '@angular/core';

@Component({
  template: `
  <nav class="mdl-navigation">
    <button><a class="mdl-navigation__link" [routerLink]="['/login']">Login</a></button>
    <button><a class="mdl-navigation__link" [routerLink]="['/register']">Register</a></button>
  </nav>`
})
export class NavigationComponent { }
