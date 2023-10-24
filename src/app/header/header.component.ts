import { Component, Input } from '@angular/core';
import { hero } from '../hero';
import { heroes } from '../mock-test';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // heroes:hero={
  //   id:1,
  //   name:"rahul"
  // }

  constructor(private heroService:HeroService,private messageService:MessageService){}

  heroes:hero[]=[]
  selectedHero?:hero;

  ngOnInit(): void {
   this.getData()
  }

  onSelect(hero:hero){
    // console.log('on select id pressed')
    this.selectedHero=hero
    this.messageService.add(hero)
  }

  getData(){
    this.heroService.getData()
    .subscribe((heroes)=> this.heroes=heroes)
  }
}
