import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './home/home.component';
import { FiltrarDiasPipe } from '../shared/pipes/filtrar-dias.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    FiltrarDiasPipe
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
