import { Component, OnInit } from '@angular/core';
import {SharedColorService} from '../sharedColor.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  myColor: string;
  experience = [{"title":"DevOps Intern", "company":"ScreenScape","date": "Feb. 2017 - Present", "body":"Providing general desktop IT support, maintaining infrastructure of corporate and production environments utilizing "+
  "corporate cloud infrastructure and third party infrastructure. Deploying application builds through environments as required. Creating, updating, and maintaining database, web, and "+
  "application servers. Troubleshooting application issues as required."},
  {"title":"Dedicated Support Specialist", "company":" Server Sitters", "date":"Oct. 2012 - Sept. 2016", "body":"Provided advanced technical support for LAMP/WAMP webservers, virtual servers, and data centres using the command "+
  "line interface and Plesk/cPanel/H-Sphere/DirectAdmin/RDP/KVM. Provided support using telephone, chat, and via e-mail. Statistically a top employee in productivity and reliability."},
  {"title": "Customer/Technical Support Representative", "company":"Resolve","date":"Aug. 2007 - Feb. 2009", "body": "Provided support to clients of financial services and internet service providers. "+
 "Provided technical support regarding business-class internet service using custom GUI, DSLAM access, and remote router access."
  }];

    constructor(private _sharedService: SharedColorService){}
    ngOnInit() {
      this._sharedService.colorString$.subscribe(
        data => {
          this.myColor = data;
              console.log("About received color: " + this.myColor + " Data: " + data );
        });
    }

}
