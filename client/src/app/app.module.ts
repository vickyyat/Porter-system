import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { Pipe, PipeTransform } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Room } from './models/room';
import { RoomComponent } from './room.component';
import { RoomService } from './services/room.service';
import { EmitterService } from './emitter.service';
import { FilterAvailablePipe } from './available.pipe';


const appRoutes: Routes = [
//  { path: 'login', component: LoginComponent },
  { path: 'index', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    FilterAvailablePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MaterialModule.forRoot()
  ],
  providers: [EmitterService, RoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
