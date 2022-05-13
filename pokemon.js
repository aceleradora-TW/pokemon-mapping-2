const response = require('./api')

//percorrer o array com o map
//criar um objeto filtrando os moves red-blue
//ordenar os moves em ordem crescente
const filtrarPokemonMovesName = (version_group) =>{
    return version_group.filter(version_group => version_group.name === red-blue)
}

const filtrarPokemonMoves = (moves) =>{
    return moves.filter(move => filtrarPokemonMovesName(move.version_group))
}

const pokemon = (listaPkm) => {
    const pkmMoves = listaPkm.filter(pkm => filtrarPokemonMoves(pkm.moves))
    console.log(pkmMoves)
}

console.dir(pokemon(response, {depth:null}))