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
            return abilit.ability.name
        })
    })
    let atributos = api.map(attrib => {
        return attrib.stats.map(status => {

            return status.base_stat

        })
    })
    let movimentos = api.map(lista => {
        return lista.moves.filter(ataques => {
            let nomes = ataques.move.name
            let detalhes = ataques.version_group_details.filter(details => {
                let lvl = details.level_learned_at
                return details.move_learn_method.name !== 'tutor' && details.move_learn_method.name !== 'machine' && details.version_group.name === 'red-blue'
                // if (details.move_learn_method.name === "level-up" && details.version_group.name === "red-blue") {
                //     console.log(ataques.move.name)
                //     return ataques.move.name
                // }
            })
            if (detalhes == ataques.move.name) {
                console.log(nomes)
            }
            console.log(detalhes)
        })

    })
    //const TutorMachine = ataques.version_group_details.filter(tutMach => {
    //console.log(tutMach.name == "tutor")

    // return teste
    // console.log(detalhes)


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
        moves: [
            // movimentos
        ]
    }]
    // console.log(map.type)
    // const pokemon = {
    //     teste: map
}
console.dir(pokemon(api), { depth: null })
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