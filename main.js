const response = require("./api")



const redBlue = (pokemon) => {
  return pokemon["version_group"].name === "red-blue"
}

const removeMachine = (pokemon) =>{
    const version = pokemon["version_group_details"].find(version=>redBlue(version))
    if (!version){
      return false
    } 
    return version["move_learn_method"].name !== "machine" && version["move_learn_method"].name !== "tutor"

}

const pokemon = response.map(pkm => (
  {
    id: pkm.id,
    name: pkm.name,
    type : [pkm.types[0].type.name],
    abilities : [pkm.abilities[0].ability.name,pkm.abilities[1].ability.name],
    attributes :{
        hp : pkm.stats[0].base_stat,
        attack : pkm.stats[1].base_stat,
        specialAttack : pkm.stats[3].base_stat, 
        defense : pkm.stats[2].base_stat,
        specialDefense : pkm.stats[4].base_stat,
        speed : pkm.stats[5].base_stat 
        },

     moves : pkm.moves.filter(find => removeMachine(find)).map(maping=>({
       name : maping.move.name,
       lv : maping["version_group_details"].find(lvl=> redBlue(lvl)).level_learned_at
     }))

     
  }))
 
console.dir(pokemon,{depth: null});
