import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsModule } from './pokemons/pokemons.module';


@NgModule({
  imports: [
    CommonModule,
    PokemonsModule
  ]
})
export class PagesModule { }
