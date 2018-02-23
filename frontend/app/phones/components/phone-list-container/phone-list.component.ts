/* tslint:disable:component-selector */
import { PhoneStoreService } from './../../services/phone-store.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Phone } from '../../model/phone.model';

@Component({
  selector: 'pg-list-container',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {
  phones$: Observable<Phone[]>;

  constructor(private phoneStoreService: PhoneStoreService) {}

  ngOnInit() {
    this.phones$ = this.phoneStoreService.phones$;
  }
}
