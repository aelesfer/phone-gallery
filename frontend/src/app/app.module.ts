import { AppRoutes } from './app.routes';
import { SpinnerComponent } from './phones/components/spinner/spinner.component';
import { PhonesService } from './phones/services/phones.service';
import { PhoneStoreService } from './phones/services/phone-store.service';
import { RouterModule } from '@angular/router';
import { phoneReducerFactory } from './phones/store/phone.reducer';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({phones: phoneReducerFactory}),
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    PhoneStoreService,
    PhonesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
