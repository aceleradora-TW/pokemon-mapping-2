const api = require("./api")

function procurarVersao(versao) {
  return versao["version_group"].name === "red-blue"
}

function encontrarStatus(pokemon, atributo) {
  const status = pokemon.stats.find(status => status.stat.name === atributo)
  return status.base_stat
}

function movesSemMachineESemTutor(move) {
  // acharversaodomove ====>  ta catando tudo que é red-blue
  const acharVersaoDoMove = move["version_group_details"].find(moves => procurarVersao(moves))
  if (!acharVersaoDoMove) {
    return false
  }
  return acharVersaoDoMove[move_learn_method].name !== 'machine' && acharVersaoDoMove[move_learn_method].name !== 'tutor'
}
const imprimir = api.map(pokemon => ({
  id: pokemon.id,
  name: pokemon.name,
  types: pokemon.types.map(pokemon => pokemon.type.name),
  abilities: pokemon.abilities.map(pokemon => pokemon.ability.name),
  //  abilities: [pokemon.abilities],
  attributes: {
    hp: encontrarStatus(pokemon, "hp"),
    attack: encontrarStatus(pokemon, "attack"),
    specialAttack: encontrarStatus(pokemon, "special-attack"),
    defense: encontrarStatus(pokemon, "defense"),
    specialDefense: encontrarStatus(pokemon, "special-defense"),
    speed: encontrarStatus(pokemon, "speed"),
  },
  moves: pokemon.moves.filter(pokemon => movesSemMachineESemTutor(pokemon)).map(
    movimento => ({
      name: movimento.move.name
    })
  )




}))
console.dir(imprimir, { depth: null })



// Observações:
// Apenas os moves que são da versão red-blue devem ser retornados para o objeto.
// Ordenar os moves em ordem crescente
// Não devem ser filtrados moves que tenha move_learn_method.name igual a machine ou tutor

/* """red-blue""" exemplo de saída
  [
    {
      id: 4,
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
  ]  */