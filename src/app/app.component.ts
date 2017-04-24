import { Component, OnInit } from '@angular/core';
import {SharedColorService} from './sharedColor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  colors = ["#31b0d5", "#d55631", "#d531b0", "#31d556"]
  myColor = this.colors[Math.floor(Math.random()*this.colors.length)];

  constructor( private sharedSer : SharedColorService ) {
    sharedSer.Update(this.myColor);
  }
  }
