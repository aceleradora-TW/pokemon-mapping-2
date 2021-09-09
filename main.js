const api = require('./api')

const encontrarVersao = (versaoRedBlue) => {
    return versaoRedBlue['version_group'].name === 'red-blue'
}

const encontrarStatus= (pokemon, atributoDoMomento) => {
    pokemon.stats.find(status => status.stat.name === atributoDoMomento)
}

const imprimir = api.map(pokemon => ({
    nome: pokemon.name,
    tipo: pokemon.types.map(tipo => tipo.type.name),
    habilidade: pokemon.abilities.map(habilidade => habilidade.ability.name),
    atributos: {
        ataque: encontrarStatus(pokemon, "attack"),
        defesa: encontrarStatus(pokemon, "defense"),       
    }
}))

console.log(imprimir)
/* attributes: {
    hp: encontrarStatus(umAtributoQualquer, 'hp')
    defesa: encontrarStatus(umAtributoQualquer, 'defense')
}
 */