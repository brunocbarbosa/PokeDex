import { Component, OnInit } from '@angular/core';

import { PokemonResult } from 'src/app/pages/pokemons/pokemons/pokemon.result';
import { PokemonsService } from '../../pages/pokemons/pokemons/pokemons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemonCount: PokemonResult = {
    count: 0,
  }

  constructor(private pokemonService: PokemonsService) { }

  ngOnInit(): void {
    this.pokemonService.getAll().subscribe(
      count => this.pokemonCount = count
    );
  }

}
