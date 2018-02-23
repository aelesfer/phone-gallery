import { SpinnerComponent } from './phones/components/spinner/spinner.component';
import { PhonesService } from './phones/services/phones.services';
import { PhoneStoreService } from './phones/services/phone-store.service';
import { RouterModule } from '@angular/router';
import { phoneReducerFactory } from './phones/store/phone.reducer';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StoreModule.forRoot({phones: phoneReducerFactory}),
    RouterModule.forRoot([
      { path: 'phones', loadChildren: 'app/phones/phones.module#PhonesModule' },
      { path: '', pathMatch: 'full', redirectTo: 'phones' }
  ])
  ],
  providers: [
    PhoneStoreService,
    PhonesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
