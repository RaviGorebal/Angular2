import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {

  loginForm : FormGroup;
  isSubmitted : boolean = false; 

  constructor (private fb: FormBuilder ) {
    this.loginForm =  this.fb.group(
      {
        username : ["", Validators.compose
                   ([Validators.required, Validators.minLength(4)])],
        password : ["",Validators.required]
      }
    )
  }
  
  onSubmit(): void{
    this.isSubmitted = true;
    console.log( this.loginForm.controls["username"].value);
    //console.log( this.loginForm.controls["password"].value);
    console.log( this.loginForm.value);
    // this.loginForm.setValue( { "username" : ""});
  }

}
