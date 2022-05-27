const importandoAPI = require('./api') 

const attributes = (status, nome) => {
    let b_s = status.find(bs => bs.stat.name == nome)
    return b_s.base_stat
}

const moves = a => { 
    //a.map(x => x.move.name)
    let versionGroupDetails = a.filter(y => y.version_group_details.find(y => 
        y.version_group.name === "red-blue" && 
        y.move_learn_method.name !== "machine" &&
        y.move_learn_method.name !== "tutor")).map(nomeLv => {
            
        return {name: nomeLv.move.name}
        //, lv: ${nomeLv.versionGroupDetails.level_learned_at}
    })
    return versionGroupDetails
}

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
        moves: moves(pokemon.moves)
    }
})
//console.log(imprimeTela.shift())
//console.dir(imprimeTela, {depth: null})


