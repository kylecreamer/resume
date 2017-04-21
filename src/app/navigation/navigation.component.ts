import { Component, OnInit, Injectable } from '@angular/core';
import {SharedColorService} from '../sharedColor.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})

export class NavigationComponent{
  // colors = ["#31b0d5", "#d55631", "#d531b0", "#31d556"]
  // myColor = this.colors[Math.floor(Math.random()*this.colors.length)];
  myColor: string;
  errors;
  constructor(private _sharedService: SharedColorService){
    console.log("I AM TRYING TO SUBSCRIBE");
    this._sharedService.colorString$.subscribe(
     result => {
        console.log('update announcement received... updating list with value ', result);
        this.myColor = result;
      },
        error => {
          this.errors = error;
          console.log(this.errors);
          },
          () => {
            console.log("I AM COMPLETED")
  // 'onCompleted' callback.
  // No errors, route to new page here
});
  }
}
