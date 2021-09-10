const response = require("./api")


const pokemon = response[0].moves.filter(movimento => movimento.version_group_details.filter(level => level.level_learned_at > 0
  && level.version_group.name == "red-blue").length).map(item_moves => ({
    name: item_moves.move.name,
    lv: item_moves.version_group_details[0].level_learned_at,
  }))

console.log(pokemon)

// function teste() {
//   const pokemon = response.map(rasp => rasp.moves.map(teste2 => teste2.version_group_details.map(teste3 => teste3.version_group.name == "red-blue")))
//   return console.log(pokemon)
// }

// teste()

//const pokemon = response[0].moves.map(movimento => movimento.version_group_details)
