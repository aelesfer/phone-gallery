import { PhoneAction, ActionTypes } from './phone.actions';
import { Phone } from './../model/phone.model';
import { ActionReducer } from '@ngrx/store';

export const phoneReducer: ActionReducer<Phone[]> =

  (state: Phone[] = [], action: PhoneAction) => {
    switch (action.type) {
      case ActionTypes.LOADED:
        return [...state, ...action.payload.phones];
      default:
        return state;
    }
  };

