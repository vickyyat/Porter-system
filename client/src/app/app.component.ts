import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Room } from './models/room';
import { RoomService } from './services/room.service';
import { EmitterService } from './emitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RoomService]
})

export class AppComponent {}
