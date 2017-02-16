import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Room } from '../models/room';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RoomService {
  constructor(private http: Http) { }

  private roomsUrl = 'http://localhost:8000/api/rooms';

  getRooms(): Observable<Room[]> {
    return this.http.get(this.roomsUrl)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
