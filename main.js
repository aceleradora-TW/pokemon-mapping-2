let apiPokemon = require("./api")

function semMachineEtutor(move) {
    let details = move["version_group_details"].find(version => version["version_group"].name === "red-blue")
    if (!details) {
        return false
    }
    return details["move_learn_method"].name !== "machine" && details["move_learn_method"].name !== "tutor"
}
function pokemon(api) {
    let id = api.map(numero => {
        return numero.id
    })
    let nome = api.map(nome => {
        return nome.name
    })
    let tipos = api.map(elemento => {
        return elemento.types.map(type => {
            return type.type.name
        })
    })
    let habilidades = api.map(hab => {
        return hab.abilities.map(abilit => {
            return abilit.ability.name
        })
    })
    let atributos = api.map(attrib => {
        return attrib.stats.map(status => {
            return status.base_stat
        })
    })
    console.log(atributos)
    let movimentos = apiPokemon.map(pokemon => ({

        moves: pokemon.moves.filter(filtro => semMachineEtutor(filtro)).map(moves => ({
            name: moves.move.name,
            level: moves["version_group_details"].find(versao => versao["version_group"].name === "red-blue").level_learned_at
        }))
    }))

    return [{
        id: id,
        name: nome[0],
        type: tipos[0],
        Ability: habilidades[0],
        attributes: {
            hp: atributos[0][0],
            attack: atributos[0][1],
            specialAttack: atributos[0][3],
            defense: atributos[0][2],
            specialDefense: atributos[0][4],
            speed: atributos[0][5]
        },
        movimentos
    }]
}
console.dir(pokemon(apiPokemon), { depth: null })
