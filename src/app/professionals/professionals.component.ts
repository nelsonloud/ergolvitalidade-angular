import { Component } from '@angular/core';
import { PROFESSIONALS } from '../../db-data';
import { Professionals } from '../model/professionals';

@Component({
  selector: 'app-professionals',
  templateUrl: './professionals.component.html',
  styleUrl: './professionals.component.css'
})
export class ProfessionalsComponent {
  professionals = PROFESSIONALS;

onProfessionalSelected(professionals:Professionals) {
    alert(professionals);
  }

}
