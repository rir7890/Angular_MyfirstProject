import { Injectable } from '@angular/core';
import { hero } from './hero';
import { heroes } from './mock-test';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroes:hero[]=[]

  constructor(private messageService:MessageService) { }
  getData():Observable<hero[]>{
    const data=of(heroes);
    this.messageService.DataView.push({id:1,name:"data is fetched"})
    return data
  }
}
