const express = require('express'),
    routes = express.Router();

const pokemonsController = require('../controllers/pokemons.controller');

// Pokemons route
routes.get('/pokemon', pokemonsController.getAll);
routes.get('/pokemon/:name', pokemonsController.getByName);
routes.get('/pokemon/:number', pokemonsController.getByNumber);

module.exports = routes;