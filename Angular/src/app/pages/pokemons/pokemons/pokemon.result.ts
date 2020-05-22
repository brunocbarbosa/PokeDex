import { Pokemons } from './pokemons'

export interface PokemonResult {
    count: number
    next?: string
    previous?: string
    results: Pokemons[]
}
