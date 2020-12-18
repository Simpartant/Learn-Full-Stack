import { Component, OnInit } from '@angular/core';
import {UserDataService} from "../user-data.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private userDataService: UserDataService) { }

  ngOnInit(): void {
  }

  addUserNameAge(userName: string, userAge: string){
    this.userDataService.addUser(userName, userAge);
  }

}
