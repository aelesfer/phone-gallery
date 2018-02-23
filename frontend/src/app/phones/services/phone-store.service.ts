import { Store } from '@ngrx/store';
import { Phone } from './../model/phone.model';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import * as actions from './../store/phone.actions';

@Injectable()
export class PhoneStoreService {
  phones$: Observable<Phone[]>;

  constructor(private store: Store<any>) {
    this.phones$ = store.select('phones') as Observable<Phone[]>;
    store.dispatch(new actions.LoadingAction());
  }
}
