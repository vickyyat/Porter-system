import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { EmitterService } from '../../emitter.service';
import { Room } from '../../models/room';
import { RoomService } from '../../services/room.service';
import { FilterAvailablePipe } from '../../available.pipe';

@Component({
  selector: 'room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css'],
  providers: [RoomService, FilterAvailablePipe]
})

export class RoomListComponent {
  constructor(
    private roomService: RoomService
  ){}

  @Input() rooms: Room[];
  showRooms: boolean;
  isChecked: boolean;

  clicked() {
    this.showRooms = this.showRooms == true ? false : true;
  }

  checked() {
    this.isChecked = this.isChecked == true ? false : true;
  }

  ngOnInit() {
    this.loadRooms();
  }

  loadRooms() {
    this.roomService.getRooms()
      .subscribe(
      rooms => this.rooms = rooms,
      err => {
        console.log(err);
      });
  }
}
