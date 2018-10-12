// import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { HttpModule,Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {of} from 'rxjs';

@Injectable()
export class EventService {
  prod:any=[];

  constructor(private httpmodule: HttpModule,private http:Http) { }

  posteventData(eventData){
    console.log(eventData.value);
    return this.http.post('http://localhost:4000/register/addEvents',eventData.value)
    //.pipe(map((res:Response)=> {console.log(res.json()); return res.json()}));
  };


}
