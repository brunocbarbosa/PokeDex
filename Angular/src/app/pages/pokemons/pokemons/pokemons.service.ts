import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import { Pokemons } from './pokemons';
import { PokemonResult } from './pokemon.result'

const API = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient){}

  getAll() {
    return this.http.get<PokemonResult>(`${API}/pokemon`)
  }

  getByName(number){
    return this.http.get<Pokemons>(`${API}/pokemon/${number}`)
  }
}
