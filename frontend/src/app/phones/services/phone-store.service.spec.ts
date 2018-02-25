import { StoreModule } from '@ngrx/store';
import { PhoneStoreService } from './phone-store.service';
import { TestBed, inject } from '@angular/core/testing';
import * as fromPhones from '../store/phone.reducer';

describe('PhonesStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhoneStoreService],
      imports: [
        StoreModule.forRoot({phones: fromPhones.phoneReducerFactory})]
    });
  });

  it('should ...', inject([PhoneStoreService], (service: PhoneStoreService) => {
    expect(service).toBeTruthy();
  }));
});
