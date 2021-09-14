const zeRoberto = require("./api")

const getTypes = (poke) =>
  poke.types.map((descobreTipos) => descobreTipos.type.name)

const getAbilities = (poke) =>
  poke.abilities.map((habilidade) => habilidade.ability.name)

const getStats = (poke) => poke.stats.map((stat) => stat.stat.name)

const getStatsValue = (poke) => poke.stats.map((stat) => stat.base_stat)

const createAttributes = (stats, value) => {
  let obj = {}
  for (let i = 0; i < stats.length; i++) {
    obj[stats[i]] = value[i]
  }
  return obj
}

const getMoves = (poke) => {
  const movesList = poke.moves

  return movesList
    .filter(
      (move) =>
        move.version_group_details.find(
          (version) =>
            version.version_group.name === "red-blue" &&
            version.move_learn_method.name !== "machine" &&
            version.move_learn_method.name !== "tutor"
        ) !== undefined
    )
    .map((move) => ({
      move: move.move.name,
      lv: move.version_group_details[0].level_learned_at
    }))
}

const resultado = (poke) =>
  poke.map((poke) => {
    return {
      id: poke.id,
      name: poke.name,
      types: getTypes(poke),
      abilities: getAbilities(poke),
      attributes: createAttributes(getStats(poke), getStatsValue(poke)),
      moves: getMoves(poke)
    }
  })

console.dir(resultado(zeRoberto), { depth: null })
