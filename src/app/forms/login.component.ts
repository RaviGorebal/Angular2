import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

     username : string;
     password : string;
    
     onSubmit() 
     {
         console.log(this.username);
         console.log(this.password);
     }
}
