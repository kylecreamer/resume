import { Component, OnInit } from '@angular/core';
import {SharedColorService} from '../sharedColor.service';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['../about/about.component.css']
})
export class EducationComponent {
  myColor: string;
  education = [{"title":"Bluefield High School – Academic Grade 12", "body":"Graduated from Bluefield High School in 2007."},
  {"title":"Holland College – Computer Information Systems Diploma", "body":" Graduating class of 2017."}];

  constructor(private _sharedService: SharedColorService){}

  ngOnInit() {
    this._sharedService.colorString$.subscribe(
      data => {
        this.myColor = data;
            console.log("About received color: " + this.myColor + " Data: " + data );
      });
  }
}
