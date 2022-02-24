let api = require("./api")
function mapear(b) {
    let teste = b.map(a => {
        return a.moves.map(c => {
            return c.move
        })
    })
    return teste
    // console.log(map.type)
    // const pokemon = {
    //     teste: map
}
console.log(mapear(api))
const pokemon = {
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