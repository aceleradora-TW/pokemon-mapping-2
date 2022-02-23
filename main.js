let api = require("./api")
let map = api.map(function (A) {
    console.log(A.types.name)
    return A.types.type.name
})
// console.log(map.type)
const pokemon = {
    teste: map
}
// console.log(pokemon)