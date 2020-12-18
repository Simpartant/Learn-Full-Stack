import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataStorageService} from "../shared/data-storage.service";
import {Subscription} from "rxjs";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy{
  isAuthicated = false;

  private userSub: Subscription;

  constructor(private dataStorageService: DataStorageService, private authService: AuthService ) {
  }

  ngOnInit() {

    this.userSub = this.authService.user.subscribe(user => {
      // this.isAuthicated = !user ? false : true;
      this.isAuthicated = !!user;
      console.log(!user)
      console.log(!!user)
    });

  }

  onSaveData(){
    this.dataStorageService.storeRecipes();
  }
  onFetchData(){
    this.dataStorageService.fetchRecipes().subscribe();
  }

  onLoutOut(){
    this.authService.logout();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
