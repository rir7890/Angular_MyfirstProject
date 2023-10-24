import { Injectable } from '@angular/core';
import { hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  DataView:hero[]=[]
  constructor() { }
  add(heroData:hero){
    this.DataView.push(heroData)
  }
  cleanData(){
    this.DataView=[]
  }
}
