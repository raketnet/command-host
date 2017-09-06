import { HeroDetailComponent } from './hero-detail.component';
import { SelectionComponent } from './selection.component';
import { Component,ViewChild,ElementRef } from '@angular/core';

import { Hero } from './hero';

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>

<div class="container">
  <h2>Progress Bar With Label</h2>
  <div class="progress">
    <div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" [attr.aria-valuenow]="trainingProgress" [style.width.%]="trainingProgress">
        {{trainingProgress}}% Complete">
      60%
    </div>
  </div>
</div>
<br>

   <selection-part></selection-part>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <hero-detail [hero]="selectedHero"></hero-detail>
  `,
  styles: [
   ]
})
export class AppComponent  {
  trainingProgress : string;
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
     this.myFunction();
     this.trainingProgress="50"; 
    this.selectedHero = hero;
  }


 myFunction() {
    setInterval(this.alertFunc, 3000);
}

alertFunc() {

  

}

}