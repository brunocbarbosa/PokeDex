import { Component, OnInit } from '@angular/core';

import { PokemonsService } from './pokemons/pokemons.service';
import { Pokemon } from './pokemons/pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemon: Pokemon
  pokemons: Pokemon[] = []
  types: string;
  stats: string;
  id : number;
  shiny: boolean = false;


  constructor(private PokemonsService: PokemonsService) {}

  ngOnInit(): void {
    this.getAllPokemons();
  }

  getAllPokemons(){
    for(let i=1; i<=18; i++){ // wtf?
      this.PokemonsService.getByData(i).subscribe(
        pokemon => {
          this.pokemons.push(pokemon)
          this.pokemons.sort((a,b) => {
            return a.id > b.id ? 1 : a.id < b.id ? -1 : 0
          })
        }
      )
    }
  }

  viewPokemon(id){
    this.shiny = false
    this.PokemonsService.getByData(id).subscribe(
      pokemon => {
        this.types = pokemon.types.map(types => types.type.name).join(', ');
        this.stats = pokemon.stats.map(stats => stats.stat.name).join(', ');
        this.pokemon = pokemon;
      }
    )
  }

  changeShiny(){
    if(!this.shiny){
      this.shiny = true;
    }else{
      this.shiny = false;
    }
  }
}
