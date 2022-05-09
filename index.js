//const response = require('./api')
const bancoPokApi = require('./api')

const pokemonType =  tipos => {
        return tipos.map(tipo => tipo.type.name)
    }
    
const pokemonAbilities =  abilities => {
    return abilities.map(abilitie => abilitie.ability.name)
}
//nosso attributes é stats. Temos q fazer desse jeito de cima, mas pegando dois elementos,
// base_stat e stat, porem temos q pegar antes stat.name, depois p base
//Eita, vou dar commit logo

function mapeandoPokemon(pokemons){
    const resultado = pokemons.map(pokemon => {
        return{
    id: pokemon.id,
    name: pokemon.name,
    types: pokemonType(pokemon.types),
    abilities: pokemonAbilities(pokemon.abilities),
    attributes: {
      hp: 39,
      attack: 52,
      specialAttack: 60,
      defense: 43,
      specialDefense: 50,
      speed: 65
    }
    }})
    return resultado
}


console.log(mapeandoPokemon(bancoPokApi))