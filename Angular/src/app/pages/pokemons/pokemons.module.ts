import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsComponent } from './pokemons.component';
import { CardModule } from '../../shared/components/card/card.module';



@NgModule({
  declarations: [
    PokemonsComponent
  ],
  imports: [
    CommonModule,
    CardModule
  ]
})
export class PokemonsModule { }
