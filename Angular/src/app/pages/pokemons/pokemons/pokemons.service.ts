import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import { PokemonResult } from './pokemon.result'
import { Pokemon } from './pokemon';

const API = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient){}

  getAll() {
    return this.http.get<PokemonResult>(`${API}/pokemon`)
  }

  getByData(data){
    return this.http.get<Pokemon>(`${API}/pokemon/${data}`)
  }
}
