import {Injectable} from '@angular/core';
import { Subject }   from 'rxjs/Subject';

@Injectable()
export class SharedColorService {

  // Observable string source
private colorSource = new Subject<string>();

// Observable string stream
colorString$ = this.colorSource.asObservable();

// Service message commands
Update(input:string) {
   this.colorSource.next(input);
   console.log("HEY " + input);
}

}
