import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { EmitterService } from '../../emitter.service';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})

export class LoginComponent {
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  login(usr: string, pass: string) {
    this.userService.getAllUsers()
      .subscribe(
      users => {
        users.map(user => {
        if (user.username == usr) {
          if (user.password == pass) {
            this.router.navigateByUrl('/index');
          }
        }
      },
      err => console.log(err));

      })
  }
}
