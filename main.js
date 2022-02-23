let api = require("./api")
let map = api.map(function (A) {
    // console.log(A.id)
    return A.id
})
// console.log(map.type)
const pokemon = {
    teste: map
}
console.log(pokemon)