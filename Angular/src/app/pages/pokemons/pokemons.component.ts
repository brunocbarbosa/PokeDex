import { Component, OnInit } from '@angular/core';

import { PokemonsService } from './pokemons/pokemons.service';
import { Pokemon } from './pokemons/pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemonsVet: Array<Object> = []
  pokemon: Pokemon
  pokemons: Pokemon[] = []


  constructor(private PokemonsService: PokemonsService) {}

  ngOnInit(): void {
    // this.PokemonsService.getByData(1).subscribe(
    //   pokemon => console.log(pokemon)
    // )
    this.getAllPokemons();
  }

  getAllPokemons(){
    let vet = []
    for(let i=1; i<=18; i++){ // wtf?
      this.PokemonsService.getByData(i).subscribe(
        pokemon => {
          // this.pokemon = pokemon

          this.pokemons.push(pokemon)
          this.pokemons.sort((a,b) => {
            return a.id > b.id ? 1 : a.id < b.id ? -1 : 0
          })
        }
      )
    }
    console.log(this.pokemons)
  }
}
