const importandoAPI = require('./api') 

const attributes = (status, nome) => {
    let b_s = status.find(bs => bs.stat.name == nome)
    return b_s.base_stat
}

const moves = () => {}

const imprimeTela = importandoAPI.map(pokemon => {

    return {
        id: pokemon.id,
        name: pokemon.name,
        types: pokemon.types.map(tipo => tipo.type.name),
        abilities: pokemon.abilities.map(habil => habil.ability.name),
        attributes: {
            hp: attributes(pokemon.stats, "hp"),
            attack: attributes(pokemon.stats, "attack"),
            specialAttack: attributes(pokemon.stats,"special-attack"),
            defense: attributes(pokemon.stats, "defense"), 
            specialDefense: attributes(pokemon.stats, "special-defense") ,
            speed: attributes(pokemon.stats, "speed") 
          },
        moves: [{}
            
        ]
    }
})
console.log(imprimeTela)

