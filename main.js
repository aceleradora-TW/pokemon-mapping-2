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
    let movimentos = apiPokemon.map(pokemon => ({

        moves: pokemon.moves.filter(filtro => semMachineEtutor(filtro)).map(moves => ({
            name: moves.move.name,
            level: moves["version_group_details"].find(versao => versao["version_group"].name === "red-blue").level_learned_at
        }))
    }))
    //const TutorMachine = ataques.version_group_details.filter(tutMach => {
    //console.log(tutMach.name == "tutor")

    // return teste
    // console.log(movimentos)


    // console.dir(movimentos, { depth: null })
    return [{
        id: id,
        name: nome[0],
        type: tipos[0],
        Ability: habilidades[0],
        atributos,
        attributes: {
            hp: atributos[0].sort().shift(),
            attack: atributos[0].sort().shift(),
            specialAttack: atributos[0].sort().shift(),
            defense: atributos[0].sort().shift(),
            specialDefense: atributos[0].sort().shift(),
            speed: atributos[0]
        },
        movimentos
    }]
    // console.log(map.type)
    // const pokemon = {
    //     teste: map
}
console.dir(pokemon(apiPokemon), { depth: null })
// function id (api){
//     let id = api.map(numero => {
//         return numero.id
//     })
//     return id
// }
// console.log(id(api))




// let teste2 = b.filter(function (c) {
//     return c.moves
// })