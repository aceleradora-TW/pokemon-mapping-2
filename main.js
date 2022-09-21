const response = require("./api")

const adapterElements = (element, attribute) => {
  return element.map( elem => elem[attribute].name)
}

const adapterAttributes = (attribute) => {
  const attributes = attribute.map( elem => elem.base_stat);
  return {
      hp: attributes[0],
      attack: attributes[1],
      specialAttack: attributes[2],
      defense: attributes[3],
      specialDefense: attributes[4],
      speed: attributes[5]
  }
}

const getMoves = (moves) => {
  return moves.map(move => move.version_group_details).map(version => version)
  }
  //[0].move_learn_method.name != "machine"||version.version_group_details[0].move_learn_method.name != "tutor" )


const adapterPokemon = (response) => {
  return response.map(pokemon => {
    return {
      id: pokemon.id,
      name: pokemon.name,
      types: adapterElements(pokemon.types, "type"),
      abilities: adapterElements(pokemon.abilities, "ability"),
      attributes:adapterAttributes(pokemon.stats),
      moves: getMoves(pokemon.moves),
     }
    })
  }


const pokemon = adapterPokemon(response)
console.dir(pokemon, { depth: 999 })