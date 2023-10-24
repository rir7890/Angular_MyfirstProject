import { Component,Input } from '@angular/core';
import { hero } from '../hero';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  @Input() singleHeroData?:hero;

  constructor(public messageService:MessageService){}
  
  ngOnInit(): void {
    if(this.singleHeroData){
      this.messageService.add(this.singleHeroData)
    }
  }

}
