import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './home/home.component';
import { FiltrarDiasPipe } from '../shared/pipes/filtrar-dias.pipe';
import { SwipeDirective } from '../shared/directives/swipe.directive';


@NgModule({
  declarations: [
    HomeComponent,
    FiltrarDiasPipe,
    SwipeDirective
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
