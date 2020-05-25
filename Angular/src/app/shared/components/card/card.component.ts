import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent{

  @Input() url: string = '';
  @Input() description: string = '';
  @Input() id: number;
  @Input() name: string = '';

}
