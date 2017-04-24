import { Component, OnInit } from '@angular/core';
import {SharedColorService} from '../sharedColor.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  myColor: string;
  skills =["LAMP", "cPanel/WHM", "bash", "Networking", "Security", "Linux", "Windows", "Javascript", "HTML", "CSS", "BootStrap", "JQuery", "AJAX", "OOP", "Java", "C#", "Spring MVC", "JDBC/DAO",
"Thymeleaf", "Hibernate", "Git", "ReactJS", "Angular4", "TypeScript"];
  boxColor: string;
  constructor(private _sharedService: SharedColorService){}

  ngOnInit() {
    this._sharedService.colorString$.subscribe(
      data => {
        this.myColor = data;
            console.log("About received color: " + this.myColor + " Data: " + data );
            this.setBoxColor(this.myColor);
      });
  }

  getSlide(){
    return Math.floor(Math.random()*11);
  }

  setBoxColor(color: string){
    var colors = ["#31b0d5", "#d55631", "#d531b0", "#31d556"];
    var boxColor;
switch (color)
{
    case colors[0] :
      boxColor = "#d5315e";
      break;
    case colors[1] :
      boxColor = "#31d5a8";
      break;
    case colors[2] :
      boxColor = "#31d556";
      break;
    case colors[3] :
      boxColor = "#d5315e"
      break;
   default : boxColor = "";
}
this.boxColor = boxColor;
  }
}
