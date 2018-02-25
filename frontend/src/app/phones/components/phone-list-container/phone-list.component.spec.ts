import { PhoneStoreService } from './../../services/phone-store.service';
import { PhoneDetailComponent } from './../phone-detail/phone-detail.component';
import { PhoneListComponent } from './phone-list.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SpinnerComponent } from '../spinner/spinner.component';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Store, StoreModule } from '@ngrx/store';
import * as fromPhones from '../../store/phone.reducer';
import * as actions from '../../store/phone.actions';


describe('PhoneListContainer', () => {
  const params = new BehaviorSubject({});
  let fixture: ComponentFixture<PhoneListComponent>;
  let instance: PhoneListComponent;
  let store: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PhoneListComponent,
        PhoneDetailComponent,
        SpinnerComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: params},
        PhoneStoreService],
      imports: [
        StoreModule.forRoot({phones: fromPhones.phoneReducerFactory})]
    });
    fixture = TestBed.createComponent(PhoneListComponent);
    instance = fixture.componentInstance;
    store = TestBed.get(Store);
  });


  it('should compile', () => {
    fixture.detectChanges();
    expect(fixture).toBeTruthy();
  });

});
