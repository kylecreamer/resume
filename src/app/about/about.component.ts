import { Component, OnInit } from '@angular/core';
import {SharedColorService} from '../sharedColor.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
//   myColor;
// constructor(private sharedColor: SharedColorService)
// {
//     this.myColor = this.sharedColor.myColor;
//   }
myColor: string;
constructor(private _sharedService: SharedColorService){}

ngOnInit() {
  this._sharedService.colorString$.subscribe(
    data => {
      this.myColor = data;
    });
}
}
