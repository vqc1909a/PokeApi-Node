const baseUrlSpecies= "https://pokeapi.co/api/v2"
const baseUrlPhoto = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world"
const baseUrlPokemon = "https://pokeapi.co/api/v2/pokemon"
const axios = require("axios")

const colorTypesPokemon = {
  'normal': '#929BA3',
  'fighting': '#2F2F2F',
  'flying': '#7AE7C7',
  'poison': '#795663',
  'ground': '#D2B074',
  'rock': '#999799',
  'bug': '#A2FAA3',
  'ghost': '#561D25',
  'steel': '#1D8A99',
  'fire': '#FF675C',
  'water': '#0596C7',
  'grass': '#4A9681',
  'electric': '#FFEA70',
  'psychic': '#FFC6D9',
  'ice': '#AFEAFD',
  'dragon': '#DA627D',
  'dark': '#090C13',
  'fairy': '#FB8AEC',
  'unknown': '#556572',
  'shadow': '#512A9D'
}

const getAll = async ({page = 1, limit = 12} = {}) => {
 const offset = (page - 1) * limit
 const {data} = await axios.get(`${baseUrlSpecies}/pokemon-species?offset=${offset}&limit=${limit}`)
 const items = data.results.map((pokemon, i) => ({ 
   id: pokemon.url.slice(pokemon.url.indexOf("species") + 8, -1),
   name: pokemon.name, 
   photo: `${baseUrlPhoto}/${((i+1) + offset)}.svg`,
 }))
 const total_items = data.count; 
 return {
  items,
  total_items
 }
}

const getOne = async ({id} = {}) => {
 const {data} = await axios.get(`${baseUrlPokemon}/${id}`)
 const newPokemon = {
   id: data.id,
   name: data.name,
   photo: data.sprites.other.dream_world.front_default,
   photo_datapaldo: data.sprites.other['official-artwork'].front_default,
   height: data.height,
   weight: data.weight,
   abilities: data.abilities.map(({ability}) => ability.name),
   types: data.types.map(({type}) => ({name: type.name, color: colorTypesPokemon[type.name]})),
   form: data.forms.map(({name}) => name),
   stats: data.stats.map(({base_stat, stat}) => ({name: stat.name, base_stat}))
 }
 return newPokemon

}

module.exports = {
 getAll,
 getOne
}