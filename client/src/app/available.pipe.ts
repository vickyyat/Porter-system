import { Pipe, PipeTransform } from '@angular/core';
import { Room } from './models/room';
import { RoomService } from './services/room.service';

@Pipe({
  name: 'filterAvailable',
  pure: false
})

export class FilterAvailablePipe implements PipeTransform {
transform(rooms: Room[], status: boolean) {
    return rooms.filter(room => room.available == status);
  }
}
