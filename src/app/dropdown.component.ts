//our root app component
import {Component, Directive, Output, EventEmitter, Input, SimpleChange} from '@angular/core'
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
//import 'rxjs/Rx';

@Component({
  selector: 'my-app',
  template:`
    <h1>Selecting Number</h1>
    <select type="number" [(ngModel)]="levelNum" (ngModelChange)="toNumber()">
      <option *ngFor="let level of levels" [ngValue]="level.num">{{level.name}}</option>
    </select>
    {{levelNum}}
  `,
})
export class DropDown {
  levelNum:number;
  levels:Array<Object> = [
      {num: 0, name: "AA"},
      {num: 1, name: "BB"}
  ];

  toNumber(){
    this.levelNum = +this.levelNum;
    console.log(this.levelNum);
  }
}