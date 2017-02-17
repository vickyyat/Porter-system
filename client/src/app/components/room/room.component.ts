import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { EmitterService } from '../../emitter.service';
import { Room } from '../../models/room';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
  providers: [RoomService]
})

export class RoomComponent {
  constructor(
    private roomService: RoomService
  ) { }
  @Input() room: Room;
  @Input() id: number;
  @Input() number: number;
  @Input() available: boolean;
  @Input() capacity: number;

  updateRoom() {
    this.available = this.available ? false : true;
    this.room.available = this.available;
    this.roomService.updateRoom(this.room)
      .subscribe(
      room => this.room = room,
      err => {
        console.log(err);
      });
  }
}
