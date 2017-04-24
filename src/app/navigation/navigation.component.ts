import { Component, OnInit, Injectable } from '@angular/core';
import {SharedColorService} from '../sharedColor.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})

export class NavigationComponent{
  myColor: string;
  constructor(private _sharedService: SharedColorService){}

  ngOnInit() {
    this._sharedService.colorString$.subscribe(
      data => {
        this.myColor = data;
            console.log("About received color: " + this.myColor + " Data: " + data );
      });
  }
}
