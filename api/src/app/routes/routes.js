const express = require('express'),
    routes = express.Router();

const pokemonsController = require('../controllers/pokemons.controller');

// Pokemons route
routes.get('/api/pokemon', pokemonsController.getAll);
routes.get('/api/pokemon/:data', pokemonsController.getOne);

module.exports = routes;