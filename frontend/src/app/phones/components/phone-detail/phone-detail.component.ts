import { Phone } from './../../model/phone.model';
/* tslint:disable:component-selector */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'pg-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.css']
})
export class PhoneDetailComponent {

  @Input() phone: Phone;


}
