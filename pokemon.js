const api = require('./api')

const filtraMovesRedBlue = (versionGroupDetails) => {
    return versionGroupDetails['version_group'].name === 'red-blue'
}

const filtrarAttributesPkm = (pokemon, atributoDoMomento) => {
    const atributos = pokemon.stats.find(status => status.stat.name === atributoDoMomento)
    return atributos.base_stat
}

const filtraMovesSemMachineTutor = (move) => {
    const acharVersao = move['version_group_details'].find(version => filtraMovesRedBlue(version))
    if(!acharVersao){
        return false
    }
    return acharVersao['move_learn_method'].name !== 'tutor' && acharVersao['move_learn_method'].name !== 'machine'
}

const imprimir = (response) => response.map(pokemon => ({
    id: pokemon.id,
    name: pokemon.name,
    types: pokemon.types.map(tipo => tipo.type.name),
    abilities: pokemon.abilities.map(habilidade => habilidade.ability.name),
    attributes: {
        hp: filtrarAttributesPkm(pokemon, 'hp'),
        attack: filtrarAttributesPkm(pokemon, 'attack'),
        specialAttack: filtrarAttributesPkm(pokemon, 'special-attack'),
        defense: filtrarAttributesPkm(pokemon, 'defense'),
        specialDefense: filtrarAttributesPkm(pokemon, 'special-defense'),
        speed: filtrarAttributesPkm(pokemon, 'speed')
    },
    moves: pokemon.moves.filter(move => filtraMovesSemMachineTutor(move)).map(
        movimento => ({
            name: movimento.move.name,
            lv: movimento['version_group_details'].find(versao => filtraMovesRedBlue(versao)).level_learned_at
        })
    )
}))

console.dir(imprimir(api), {depth: null});