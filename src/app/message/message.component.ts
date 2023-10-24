import { Component,Input, OnInit } from '@angular/core';
import { hero } from '../hero';
import { MessageService } from '../message.service';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() Message?:hero;
  Messages:hero[]=[]

  constructor(private messageService:MessageService,private heroService:HeroService){
  }
  ngOnInit(): void {
    if(this.Message){
      this.messageService.add(this.Message)
    }
    this.Messages =this.messageService.DataView
  }



}
