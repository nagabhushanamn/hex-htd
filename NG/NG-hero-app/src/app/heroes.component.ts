import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero-service.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService,private router:Router) { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .then(heroes => {
        this.heroes = heroes;
      });
  }

  ngOnInit(): void {
    this.getHeroes();
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}
