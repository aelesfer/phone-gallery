import { PhoneDetailComponent } from './components/phone-detail/phone-detail.component';
import { PhoneEffects } from './store/phone.effects';
import { PhoneListComponent } from './components/phone-list-container/phone-list.component';
import { PhonesRoutes } from './phones.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PhonesRoutes),
    EffectsModule.forRoot([PhoneEffects])
  ],
  declarations: [
    PhoneListComponent,
    PhoneDetailComponent],
  providers: []
})
export class PhonesModule {}
