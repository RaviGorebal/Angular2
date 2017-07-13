import { Component } from '@angular/core';

@Component({
  selector: 'app-another',
  template: `
    <p>
      another Works!
    </p>
  `,
  styles: [
    `
    p{
        font-size:60px;
        color:green;
        border:1px solid red;
    }
    `
  ]
})
export class AnotherComponent {

}
