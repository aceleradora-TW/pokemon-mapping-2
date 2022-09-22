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
  return moves.filter(move => move.version_group_details.map(elemento => {
    return {name: elemento.move_learn_method.name,
            lv: elemento.move_learn_method. }

  }))}

//moves[0].version_group_details[0].level_learned_at (extrair valor)

//moves[0].version_group_details[0].move_learn_method.name (pegar valor e retirar machine,tutor)

//moves[0].version_group_details[0].version_group.name (pegar valor e filtra somente red-blue)


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




/* saida[{
  name:name move
  lv: level move
}]
 */

