import { Component } from '@angular/core';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent {
  amount:Number=0;
  rate:number=0;
  clearAll():void{
      this.amount=0;
      this.rate =0;
  }
}
