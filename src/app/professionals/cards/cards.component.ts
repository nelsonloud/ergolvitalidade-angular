import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Professionals } from '../../model/professionals';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  
  
  @Input() professionals!:Professionals;

  @Output() professionalSelected = new EventEmitter<Professionals>();

  onProfessionalViewed(){
    this.professionalSelected.emit(this.professionals);
  }
}
