import { Component, Input } from '@angular/core';

import { searchitem } from './searchItem.component';

import { SearchArray } from './searcharray';

@Component({
  selector: 'selection-part',
  template: `
  <li *ngIf="person ==='UK'"
      class="text-success">Test1
  </li>
  <li *ngIf="person === 'USA'">
 <table>
 <tr>
 <td> <searchitem-part [searchArrays]="searchArray1"></searchitem-part></td>
  <td> <searchitem-part [searchArrays]="searchArray2"></searchitem-part></td>
 </tr>
 </table>
     <button type="button" (click)="addtoarray()" class="btn btn-primary btn-block">Button 1</button>
  </li>

  `
})
export class SelectionComponent {
person : string = 'USA';
searchArray1:SearchArray[] =[ new SearchArray(false,'c','test allan'),new SearchArray(false,'5','test brian')];
searchArray2:SearchArray[] =[ new SearchArray(false,'c','test fff'),new SearchArray(false,'5','testfbffrian')];

addtoarray(){
   // this.searchArray1.push(new SearchArray(false,'c','xxxxxxxx'));
    this.searchArray1[1].name="test";
   }

}

