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

@Pipe({
  name: 'filterByNumber',
  pure: false
})

export class FilterByNumberPipe implements PipeTransform {
  transform(rooms: Room[], status: number) {
    if (!status) return rooms.filter(room => room);
    return rooms.filter(room => room.number == status);
  }
}

@Pipe({
  name: 'filterByCapacity',
  pure: false
})

export class FilterByCapacityPipe implements PipeTransform {
  transform(rooms: Room[], status: number) {
    if (!status) return rooms.filter(room => room);
    return rooms.filter(room => room.number == status);
  }
}
