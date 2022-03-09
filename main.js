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
        })).sort()

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
        attributes: {
            hp: atributos[0].shift(),
            attack: atributos[0].shift(1),
            specialAttack: atributos[0].shift(3),
            defense: atributos[0].shift(2),
            specialDefense: atributos[0].shift(4),
            speed: atributos[0].shift(5)
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
const pokEmon = {
    id: Number,
    name: String,
    types: Array, // Array de string
    abilities: Array, // Array de string
    attributes: {
        hp: Number,
        attack: Number,
        specialAttack: Number,
        defense: Number,
        specialDefense: Number,
        speed: Number
    },
    moves: [
        {
            name: String,
            lv: Number
        }
    ]
}


    // let teste2 = b.filter(function (c) {
    //     return c.moves
    // })