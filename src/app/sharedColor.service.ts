import {Injectable} from '@angular/core';
import { Subject }  from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class SharedColorService {

  // Observable string source
private colorSource: BehaviorSubject<string>= new BehaviorSubject<string>("#d55631");

// Observable string stream
colorString$ = this.colorSource.asObservable();

// Service message commands
Update(input:string) {
   this.colorSource.next(input);
   console.log("Service Color: " + input);
}

}
