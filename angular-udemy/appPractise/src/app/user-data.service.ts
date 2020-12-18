import { Injectable } from '@angular/core';
import {NotificationService} from "./notification.service";

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  user = [{
    name: 'Son',
    age: '10'
  },
    {
      name: 'Ti',
      age: '55'
    },
    {
      name: 'Abc',
      age: '150'
    },
  ]
  constructor(private notification: NotificationService) {

  }

  addUser(name: string, age: string){
    this.user.push({name: name, age: age});
    this.notification.pushNoty(name, age);
  }

}
