import { Component, OnInit } from '@angular/core'
import type { Hero } from './hero'
import { HEROES } from '../mock-hereos'
import { HeroService } from '../hero.service'
import { MessageService } from '../message.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = []
  selectHero?: Hero

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes))
  }

  onSelect(hero: Hero): void {
    this.selectHero = hero
    this.messageService.add(`英雄组件: 选中 英雄 id=${hero.id}`)
  }
}
