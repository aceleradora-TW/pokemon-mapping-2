
const findVersion = (version) => {
  return version["version_group"].name === 'red-blue'
}

const whenLearnMove = (move) => {
  const versionGroupDetails = move["version_group_details"].find(version => findVersion(version))
  if (!versionGroupDetails) return false
  return (
    versionGroupDetails["move_learn_method"]?.name !== 'machine' &&
    versionGroupDetails["move_learn_method"]?.name !== 'tutor'
  )
}

const findAttribute = (pkm, attributeName) => pkm.stats.find(s => s.stat.name === attributeName)["base_stat"]

export const adapterPokemon = (response) => {
  return response.map(pokemon => ({
    id: pokemon.id,
    name: pokemon.name.replace("-", " "),
    types: pokemon.types.map(type => type.type.name),
    abilities: pokemon.abilities.map(ability => ability.ability.name.replace("-", " ")),
    attributes: {
      hp: findAttribute(pokemon, 'hp'),
      attack: findAttribute(pokemon, 'attack'),
      specialAttack: findAttribute(pokemon, 'special-attack'),
      defense: findAttribute(pokemon, 'defense'),
      specialDefense: findAttribute(pokemon, 'special-defense'),
      speed: findAttribute(pokemon, 'speed')
    },
    moves: pokemon.moves.filter(
      move => whenLearnMove(move)
    ).map(
      move => (
        {
          name: move.move.name.replace("-", " "),
          lv: move["version_group_details"].find(v => findVersion(v))["level_learned_at"]
        }
      )
    ).sort((a, b) => a.lv - b.lv)
  })
  )
}