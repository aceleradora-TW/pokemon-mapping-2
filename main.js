const api = require('./api')

const encontrarVersao = (versaoRedBlue) => {
    return versaoRedBlue['version_group'].name === 'red-blue'
}

const encontrarStatus= (pokemon, atributoDoMomento) => {    
    const status = pokemon.stats.find(status => status.stat.name === atributoDoMomento)
    return status.base_stat
}

const movesSemMachineETutor = (move) => {
    const acharVersao = move['version_group_details'].find(version => encontrarVersao(version))
    if (!acharVersao) {
        return false
    }
    return acharVersao['move_learn_method'].name !== 'tutor' && acharVersao['move_learn_method'].name !== 'machine'
}

const imprimir = api.map(pokemon => ({
    id: pokemon.id,
    name: pokemon.name,
    types: pokemon.types.map(tipo => tipo.type.name),
    abilities: pokemon.abilities.map(habilidade => habilidade.ability.name),
    attributes: {
        hp: encontrarStatus(pokemon, "hp"),
        attack: encontrarStatus(pokemon, "attack"),
        specialAttack: encontrarStatus(pokemon, "special-attack"),
        defense: encontrarStatus(pokemon, "defense"), 
        specialDefense: encontrarStatus(pokemon, "special-defense"),
        speed: encontrarStatus(pokemon, "speed"),      
    },
     moves: pokemon.moves.filter(move => movesSemMachineETutor(move)).map(
         movimento => (
             {
              name: movimento.move.name,
              lv: movimento['version_group_details'].find(version => encontrarVersao(version)).level_learned_at
             }
         )
     )
}))

console.dir(imprimir, {depth: null})
/* attributes: {
    hp: encontrarStatus(umAtributoQualquer, 'hp')
    defesa: encontrarStatus(umAtributoQualquer, 'defense')
}
 */