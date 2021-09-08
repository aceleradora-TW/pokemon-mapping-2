
const response = require("./api")


const pokemon = response.moves.map(movimento => movimento.version_group_details)

// bla bla

console.log(pokemon)

/*

[
  {
    name: 'charmander',
    types: [ 'fire' ],
    abilities: [ 'blaze', 'solar-power' ],
    attributes: {
      hp: 39,
      attack: 52,
      specialAttack: 60,
      defense: 43,
      specialDefense: 50,
      speed: 65
    },
    moves: [
      { name: 'scratch', lv: 1 },
      { name: 'leer', lv: 15 },
      { name: 'growl', lv: 1 },
      { name: 'ember', lv: 9 },
      { name: 'flamethrower', lv: 38 },
      { name: 'fire-spin', lv: 46 },
      { name: 'rage', lv: 22 },
      { name: 'slash', lv: 30 }
    ]
  }
]

*/