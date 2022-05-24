const importandoAPI = require('./api') 

const imprimeTela = importandoAPI.map(pokemon => {



    return {
        id: pokemon.id,
        name: pokemon.name,
        types: pokemon.types.map(tipo => tipo.type.name),
        abilities: pokemon.abilities.map(habil => habil.ability.name)
    

    }
})
console.log(imprimeTela)

