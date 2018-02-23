import { Phone } from '../model/phone.model';

export const ActionTypes = {
  LOADING: '[Phones] Loading',
  LOADED: '[Phones] Loaded',
  LOAD_ERROR: '[Phones] Load error'
};

export class PhonePayload {
  constructor(public phone: Phone) {}
}

export class PhonesPayload {
  constructor(public phones: Phone[]) {}
}

export class LoadingAction {
  type = ActionTypes.LOADING;
  constructor(public payload: any = null) {}
}

export class LoadedAction {
  type = ActionTypes.LOADED;
  constructor(public payload: PhonesPayload) {}
}

export class LoadErrorAction {
  type = ActionTypes.LOAD_ERROR;
  constructor(public payload: string) {}
}

export type PhoneAction =
  | LoadingAction
  | LoadedAction
  | LoadErrorAction;
