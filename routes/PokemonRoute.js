const express = require("express")
const Router = express.Router()
const {showPokemones, showPokemon} = require("../middlewares/PokemonMiddleware")
Router.get('/', showPokemones)
Router.get('/pokemon/:id', showPokemon)

module.exports = Router