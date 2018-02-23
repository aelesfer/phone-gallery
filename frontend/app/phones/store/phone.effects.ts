import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { PhonesService } from './../services/phones.services';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as phoneActions from './phone.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class PhoneEffects {

  constructor(
    private api: PhonesService,
    private actions$: Actions) {}

  @Effect()
  load$: Observable<Action> = this.actions$
    .ofType(phoneActions.ActionTypes.LOADING)
    .switchMap(() => this.api.loadPhones()
      .map(res => new phoneActions.LoadedAction({phones: res}))
      .catch(() => Observable.of({type: phoneActions.ActionTypes.LOAD_ERROR}))
    );
}
