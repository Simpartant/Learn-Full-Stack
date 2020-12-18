import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  pushNoty(name: string, age: string){
    alert(`Name is: ${name}, Age is ${age}`);
  }
  constructor() { }
}
