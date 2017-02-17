import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { Pipe, PipeTransform } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Room } from './models/room';
import { RoomComponent } from './components/room/room.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation.component';
import { RegisterComponent } from './components/register/register.component';
import { RoomService } from './services/room.service';
import { UserService } from './services/user.service';
import { EmitterService } from './emitter.service';
import { FilterAvailablePipe } from './available.pipe';
import { FilterByNumberPipe } from './available.pipe';
import { FilterByCapacityPipe } from './available.pipe';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    RoomListComponent,
    LoginComponent,
    RegisterComponent,
    FilterAvailablePipe,
    FilterByNumberPipe,
    FilterByCapacityPipe,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MaterialModule.forRoot(),
    AppRoutingModule
  ],
  providers: [EmitterService, RoomService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
