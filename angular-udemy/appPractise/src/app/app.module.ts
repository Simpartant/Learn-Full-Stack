import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import {UserDataService} from "./user-data.service";
import {NotificationService} from "./notification.service";

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserDataService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
