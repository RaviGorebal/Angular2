import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import{ CuspipePipe } from './cuspipe.pipe';
import{ HighlightDirective } from './highlight.directive';
import {UnlessDirective} from './unless.directive';
import {LifecycleComponent} from './lifecycle/lifecycle.component';
import { LogService } from './services/log.service';
import {LogServicesComponent} from './services/logservices.component';
@Component({
  selector: 'app-attr-dir',
  templateUrl: './attr-dir.component.html',
  styleUrls:['./attr-dir.component.css']

})
export class AttrDirComponent  {

  title:string = 'app';

 myclasses={ 'big':true,"red":true,"border":true}
//  isSpecial:boolean=false;
//  canSave:boolean=true;
//  private switch =true;
// dateObj : string= '14-jul-2017';
// str:string="Srinivas Pramod";
//  onSave():void{
//    alert("Onsave Called");
//  }
//   onSwitch(){
//     this.switch = !this.switch;
//   }
}
