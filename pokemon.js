const response = require('./api')

//percorrer o array com o map
//criar um objeto filtrando os moves red-blue
//ordenar os moves em ordem crescente
const filtrarPokemonMovesName = (version_group_details) =>{
    const version = version_group_details.map( details => details.version_group)
    return version.filter(version_group=> version_group.name === "red-blue")
}

const filtrarPokemonMoves = (moves) =>{
    return moves.map(move => filtrarPokemonMovesName(move.version_group_details))
}

const pokemon = (listaPkm) => {
    const pkmMoves = listaPkm.map(pkm => filtrarPokemonMoves(pkm.moves))
    console.dir(pkmMoves, {depth:null})
}

pokemon(response)