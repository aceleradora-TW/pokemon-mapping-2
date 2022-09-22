const response = require("./api")

const adapterElements = (element, attribute) => {
  return element.map(elem => elem[attribute].name)
}

const adapterAttributes = (attribute) => {
  const attributes = attribute.map(elem => elem.base_stat);
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
  return moves.map(move => move.version_group_details.filter(element=>{
    return element.version_group.name == 'red-blue' &&
            element.move_learn_method.name != 'machine' &&
            element.move_learn_method.name != 'tutor'
  }).map(elemento => {
      return {
        name: move.move.name,
        lv: elemento.level_learned_at,
      }
    
  }))
  .filter(poke=>poke[0]).map(e=>e[0])
  .sort((lv1, lv2)=>lv1.lv-lv2.lv)
}

const adapterPokemon = (response) => {
  return response.map(pokemon => {
    return {
      id: pokemon.id,
      name: pokemon.name,
      types: adapterElements(pokemon.types, "type"),
      abilities: adapterElements(pokemon.abilities, "ability"),
      attributes: adapterAttributes(pokemon.stats),
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

