const bancoPokApi = require('./api')

const pokemonType = tipos => {
    return tipos.map(tipo => tipo.type.name)
}

const pokemonAbilities = abilities => {
    return abilities.map(abilitie => abilitie.ability.name)
}

const mapeandoAtributos = (status, atributos) => {
    const getStatus = status.stats.find(atributo => atributo.stat.name === atributos)
    return getStatus.base_stat

}

const mapeandoMoves = moves => {
    return moves.moves.filter(move =>
        move.version_group_details.find(name =>
            name.version_group.name === "red-blue" && name.move_learn_method.name !== "machine" && name.move_learn_method.name !== "tutor"))
        .map(move => ({
            name: move.move.name, lv: buscandoMoveLevel(move)
        }))
}

const buscandoMoveLevel = move => {
    return move.version_group_details.find(lv => lv.version_group.name === "red-blue").level_learned_at
}
function mapeandoPokemon(pokemons) {
    const resultado = pokemons.map(pokemon => {
        return {
            id: pokemon.id,
            name: pokemon.name,
            types: pokemonType(pokemon.types),
            abilities: pokemonAbilities(pokemon.abilities),
            attributes: {
                hp: mapeandoAtributos(pokemon, "hp"),
                attack: mapeandoAtributos(pokemon, "attack"),
                specialAttack: mapeandoAtributos(pokemon, "special-attack"),
                defense: mapeandoAtributos(pokemon, "defense"),
                specialDefense: mapeandoAtributos(pokemon, "special-defense"),
                speed: mapeandoAtributos(pokemon, "speed")
            },
            moves: mapeandoMoves(pokemon),
        }
    })
    return resultado
}
console.dir(mapeandoPokemon(bancoPokApi), { depth: 1000 })
