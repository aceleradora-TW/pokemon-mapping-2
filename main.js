const api = require('./api')

const encontrarVersao = (versaoRedBlue) => {
    return versaoRedBlue['version_group'].name === 'red-blue'
}

const encontrarStatus= (a, b) => {
    a.stats.find(status => status.stat.name === b)
}