import { Component } from '@angular/core';

/**
 * Generated class for the TesteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'teste',
  template: `<div>
                {{text}} aquii
            </div>`
})
export class TesteComponent {

  text: string;

  constructor() {
    console.log('Hello TesteComponent Component');
    this.text = 'Hello World teste 123 ';
  }

}
