import { Component, OnInit } from '@angular/core';
import {UserDataService} from "../user-data.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userData = [];
  constructor(private userDataService: UserDataService) { }

  ngOnInit(): void {
    this.userData = this.userDataService.user;
  }

}
