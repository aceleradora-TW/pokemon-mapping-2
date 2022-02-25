let api = require("./api")
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
            return abilit.ability
        })
    })
    let atributos = api.map(attrib => {
        return attrib.stats.map(status => {
            for (prop in status.stat.name) {
                console.log(`status ${prop} = ${status.stat.name}`)
            }
            return status.stat.name
        })
    })
    let movimentos = api.map(lista => {
        return lista.moves.map(ataques => {
            return ataques.move.name
        })
    })
    return {
        id: id,
        name: nome,
        type: tipos,
        moves: movimentos,
        attributes: atributos
    }
    // console.log(map.type)
    // const pokemon = {
    //     teste: map
}
console.log(pokemon(api))
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