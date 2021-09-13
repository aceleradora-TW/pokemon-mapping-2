const zeRoberto = require("./api")

// response obj = forms obj = atributo "name" (tem nome do pokemon)
// moves obj = version_group_details obj = version-group obj = atributo "name" red-blue
// abilities obj = ability obj = atributo name
// stats = hp, attack, defense, specialDefense, speed
// types obj = type obj = name

// poke.moves.filter(move => {
// version_group_details.filter()
// })

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
          (version) => version.version_group.name === "red-blue"
        ) !== undefined
    )
    .map((move) => console.log(move))
}

const resultado = (poke) =>
  poke.map((poke) => {
    return {
      name: poke.name,
      types: getTypes(poke),
      abilities: getAbilities(poke),
      attributes: createAttributes(getStats(poke), getStatsValue(poke)),
      moves: getMoves(poke)
    }
  })

console.dir(resultado(zeRoberto), { depth: null })

// [
//     {
//       name: 'charmander',
//       types: [ 'fire' ],
//       abilities: [ 'blaze', 'solar-power' ],
//       attributes: {
//         hp: 39,
//         attack: 52,
//         specialAttack: 60,
//         defense: 43,
//         specialDefense: 50,
//         speed: 65
//       },
//       moves: [
//         { name: 'scratch', lv: 1 },
//         { name: 'leer', lv: 15 },
//         { name: 'growl', lv: 1 },
//         { name: 'ember', lv: 9 },
//         { name: 'flamethrower', lv: 38 },
//         { name: 'fire-spin', lv: 46 },
//         { name: 'rage', lv: 22 },
//         { name: 'slash', lv: 30 }
//       ]
//     }
//   ]
