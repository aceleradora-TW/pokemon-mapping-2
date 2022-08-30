const response = require("./api")

const getStatus = (obj, status) => {
  const resultStatus = obj.stats.find(
    (type) => type.stat.name === status).base_stat
  return resultStatus
}

const getAtributes = (pokemon) => {
  return {
    hp: getStatus(pokemon, 'hp'),
    attack: getStatus(pokemon, 'attack'),
    specialAttack: getStatus(pokemon, 'special-attack'),
    defense: getStatus(pokemon, 'defense'),
    specialDefense: getStatus(pokemon, 'special-defense'),
    speed: getStatus(pokemon, 'speed')
  }
}

const getMove = (moves) => {
  const obj = moves.filter((move) => move.version_group_details.find((detail) => detail.version_group.name === 'red-blue' &&
    detail.move_learn_method.name !== 'machine' &&
    detail.move_learn_method.name !== 'tutor'
  )).map((params) => {
    return {
      name: params.move.name,
      Lv: params.version_group_details.find(level => level.version_group.name === 'red-blue').level_learned_at
    }
  }).sort((a, b) => a.Lv - b.Lv)
  return obj;
}

const updatePokemon = (obj) => {
  return obj.map(pokemon => {
    return {
      id: pokemon.id,
      name: pokemon.name,
      types: pokemon.types.map(type => type.type.name),
      abilities: pokemon.abilities.map(ability => ability.ability.name),
      atributes: getAtributes(pokemon),
      moves: getMove(pokemon.moves)
    }
  })
}

pokemon = updatePokemon(response)
console.dir(pokemon, { depth: 99999 })
