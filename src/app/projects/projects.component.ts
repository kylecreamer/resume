import { Component, OnInit } from '@angular/core';
import {SharedColorService} from '../sharedColor.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
myColor:string;

projects =[{"title":"https://bitbucket.org/kylewc/", "body": "Several projects created during the Java courses at Holland College during the Computer Information Systems course.  Several"
+"implementing Spring MVC, hibernate, and utilizing Maven for automated builds. One project is an android application which makes use of fragments, web services, SQLite, adapters, speech, "
+"Facebook SDK, and social media sharing. "},
{"title": "http://ben21tours.com", "body": "Ben is a local certified tour operator that provides sightseeing day tours of Prince Edward Island.This website is a heavily modified bootstrap "
+"template which features vertical tabs on the tours page, and backend PHP Scripting allowing for reviews to be submitted, reviewed, approved, and then written to the tours page."},
{"title": "https://github.com/kylecreamer/", "body": "GitHub account featuring personal projects and assignments associated with schoolwork for the Computer Information Systems program at"
+"Holland College. School related items are available on this page associated with web design, PHP, XML/XSLT, C#, Java, Angular."},
{"title": "http://islandwidedesign.com", "body": "Basic business website custom coded using Bootstrap.  Featuring tabs and a functional contact form which utilize AJAX.  JQuery used for tab"
+" scripting, and a heavy emphasis on custom CSS throughout the site.  Cyrilstoursandtales.com is now defunct but still remains on the projects page."},
{"title": "http://kylecreamer.com", "body": "Basic Angular website created for learning purposes and to act as an online resume.  Features use of ngStyle, ngFor, child components, and routing "
+ "with a shared service. NodeJS, npm, angularCLI, and typescript were the primary tools used to create the site."}
];
  constructor(private _sharedService: SharedColorService){}

  ngOnInit() {
    this._sharedService.colorString$.subscribe(
      data => {
        this.myColor = data;
            console.log("About received color: " + this.myColor + " Data: " + data );

      });
  }


}
