const api = require('./api')

const encontrarVersao = (versaoRedBlue) => {
    return versaoRedBlue['version_group'].name === 'red-blue'
}

const encontrarStatus= (pokemon, atributoDoMomento) => {
    pokemon.stats.find(status => status.stat.name === atributoDoMomento)
}



/* attributes: {
    hp: encontrarStatus(umAtributoQualquer, 'hp')
    defesa: encontrarStatus(umAtributoQualquer, 'defense')
}
 */