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
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})

export class RegisterComponent {
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  addUser(usr: string, pass: string, confPass: string) {
    if (pass == confPass) {
      let user = new User(usr, pass);
      this.userService.addUser(user).subscribe(
      user => user,
      err => {
        console.log(err);
      });
      this.router.navigateByUrl('/index');
    }
  }
}
