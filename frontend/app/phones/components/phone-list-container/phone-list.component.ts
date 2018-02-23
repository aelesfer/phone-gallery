/* tslint:disable:component-selector */
import { PhoneStoreService } from './../../services/phone-store.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Phone } from '../../model/phone.model';

@Component({
  selector: 'pg-list-container',
  template: `<pg-detail *ngFor="let phone of phones$ | async" [phone]="phone"></pg-detail>`,
  styles: [`
    :host {
      display: flex;
      flex-flow: row wrap;
      overflow-y: scroll;
      height: 100%;
      justify-content: center;
    }
  `]
})
export class PhoneListComponent implements OnInit {
  phones$: Observable<Phone[]>;

  constructor(private phoneStoreService: PhoneStoreService) {}

  ngOnInit() {
    this.phones$ = this.phoneStoreService.phones$;
  }
}
