const {getAll: getAllPokemones, getOne: getOnePokemon} = require("../services/PokemonServices")

const showPokemones = async(req, res) => {
 let page = parseInt(req.query.page)
 if(isNaN(page) || page <= 0 ){
  page = 1
 }
 const limit = 12
 const {items: pokemones, total_items} = await getAllPokemones({page, limit})
 const totalPages = Math.ceil(total_items / limit)

 return res.render("pages/Home", {
  title: "PokeApi",
  description: "Aplicación realizada utilizando la api de PokéApi",
  pokemones,
  totalPages,
  page
 })
}
const showPokemon = async(req, res) => {
 let id = parseInt(req.params.id)
 if(isNaN(id) || id <= 0 ){
  id = 1
 }
 const pokemon = await getOnePokemon({id})
 return res.render("pages/Details", {
  title: `${pokemon.name || 'pokemon'} | PokéApi`,
  description: "Aplicación realizada utilizando la api de PokéApi",
  pokemon
 })
}
module.exports = {
 showPokemones,
 showPokemon 
}