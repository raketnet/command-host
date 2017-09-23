import { Component, Input } from '@angular/core';
import { SearchArray } from './searcharray';

@Component({
  selector: 'searchitem-part',
  template: `
     <form>
        <div *ngFor="let searchArray of searchArrays" class="input-group">
            <div class="input-group-btn">
                <button tabindex="-1" class="btn btn-default" type="button"><label class="checkbox-inline"><input type="checkbox"  (click)="updateActivity(searchArray)"> {{searchArray.name}} {{searchArray.active}} </label> </button>
                <button tabindex="-1" data-toggle="dropdown" class="btn btn-default dropdown-toggle" type="button">
                    <span class="caret"></span>
                    <span class="sr-only">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li class="divider"></li>
                    <li><a href="#">Separated link</a></li>
                </ul>
            </div>
                    
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

            <input type="text" class="form-control">
        </div>
        
        
    </form>
    <button type="button" (click)="addtoarray()" class="btn btn-primary btn-block">Button 1</button>

  `
})
export class searchitem {
      @Input() searchArrays: SearchArray[];
//SearchArrays:SearchArray[] =[ new SearchArray(false,'c','test allan'),new SearchArray(false,'5','test brian')];
//right:SearchArray[] =[];

addtoarray(){
    this.searchArrays.push(new SearchArray(false,'c','xxxxxxxx'));
}

updateActivity(test:SearchArray){
    alert(JSON.stringify(test));
   if(test.active)
    test.active =false;
   else
    test.active =true;
}



}
