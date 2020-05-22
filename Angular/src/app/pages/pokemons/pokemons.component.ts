import { Component, OnInit } from '@angular/core';
import { PokemonsService } from './pokemons/pokemons.service';
import { Pokemons } from './pokemons/pokemons';
import { PokemonResult } from './pokemons/pokemon.result'

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemonsVet: Array<Object> = []
  pokemon: Pokemons
  pokemons: Pokemons[] = []
  //Set a value, you don't have a error that the element don't exist
  pokemonResult: PokemonResult = {
    count: 0,
    previous: '',
    next: '',
    results: []
  }

  constructor(private PokemonsService: PokemonsService) {}

  ngOnInit(): void {
    this.PokemonsService.getAll().subscribe(pokemonResult => {
      console.log(pokemonResult)
        this.pokemonResult = pokemonResult
    })
  }

  // getAllPokemons(){
  //   let vet = []
  //   for(let i=1; i<=2; i++){ // wtf?
  //     this.PokemonsService.getByName(i).subscribe(
  //       pokemon => {
  //         vet = [

  //            {
  //              "name" : pokemon.name,
  //              "image" : pokemon.sprites.front_default
  //            }

  //         ]

  //         this.pokemonsVet.push(vet)

  //       }
  //     )
  //   }
  //   console.log(this.pokemonsVet)
  // }

}
