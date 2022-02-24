let api = require("./api")
function mapear(b) {
    let teste = b.map(function (a) {
        return a.moves
    })
    return teste
    // console.log(map.type)
    // const pokemon = {
    //     teste: map
}
console.log(mapear(api))


    // let teste2 = b.filter(function (c) {
    //     return c.moves
    // })