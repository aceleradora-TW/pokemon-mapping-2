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

const adapterPokemon = (response) => {
  return response.map(pokemon => {
    return {
      name: pokemon.name,
      id: pokemon.id,
      types: adapterElements(pokemon.types, "type"),
      abilities: adapterElements(pokemon.abilities, "ability"),
      attributes:adapterAttributes(pokemon.stats),
     }
    })
  }


const pokemon = adapterPokemon(response)
console.dir(pokemon, { depth: 999 })