import express from 'express';

//controller import
import PokemonController from '../controllers/pokemon.controller';

//Init express router
const routes = express.Router();

//init controller
const pokemonController = new PokemonController;

// Pokemons route
routes.get('/api/pokemon', pokemonController.getAll);
routes.get('/api/pokemon/:data', pokemonController.getOne);

export default routes;