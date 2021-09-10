const api = require('./api')

const encontrarVersao = (versaoRedBlue) => {
    return versaoRedBlue['version_group'].name === 'red-blue'
}

const encontrarStatus= (pokemon, atributoDoMomento) => {
    pokemon.stats.find(status => status.stat.name === atributoDoMomento)
}

const movesSemMachineETutor = (move) => {
    const acharVersao = move['version_group_details'].find(version => encontrarVersao(version))
    if (!acharVersao) {
        return false
    }
    return acharVersao['move_learn_method'].name !== 'tutor' || acharVersao['move_learn_method'].name !== 'machine'
}

const imprimir = api.map(pokemon => ({
    nome: pokemon.name,
    tipo: pokemon.types.map(tipo => tipo.type.name),
    habilidade: pokemon.abilities.map(habilidade => habilidade.ability.name),
    atributos: {
        id: pokemon.id,
        hp: encontrarStatus(pokemon, "hp"),
        ataque: encontrarStatus(pokemon, "attack"),
        ataqueEspecial: encontrarStatus(pokemon, "special-attack"),
        defesa: encontrarStatus(pokemon, "defense"), 
        defesaEspecial: encontrarStatus(pokemon, "special-defense"),
        velocidade: encontrarStatus(pokemon, "speed"),      
    },
     moves: pokemon.moves.filter(move => movesSemMachineETutor(move)).map(
         
     )
}))

console.log(imprimir)
/* attributes: {
    hp: encontrarStatus(umAtributoQualquer, 'hp')
    defesa: encontrarStatus(umAtributoQualquer, 'defense')
}
 */