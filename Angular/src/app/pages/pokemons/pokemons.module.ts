import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsComponent } from './pokemons.component';
import { CardModule } from '../../shared/components/card/card.module';
import { ModalModule } from '../../shared/components/modal/modal.module';



@NgModule({
  declarations: [
    PokemonsComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ModalModule
  ]
})
export class PokemonsModule { }
