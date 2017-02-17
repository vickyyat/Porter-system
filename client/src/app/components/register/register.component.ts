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
    private userService: UserService
  ) { }

  @Input() user: User;

  addUser(usr: string, pass: string, confPass: string) {
    if (pass === confPass) {
      console.log(this.user);
      this.user.username = usr;
      this.user.password = pass;
      this.userService.addUser(this.user);
    }
  }
}
