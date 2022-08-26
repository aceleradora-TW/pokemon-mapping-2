const response = require("./api");
let pokemon = {
  id: Number,
  name: String,
  types: [],
  abilities: [],
  attributes: {
    hp: Number,
    attack: Number,
    specialAttack: Number,
    defense: Number,
    specialDefense: Number,
    speed: Number,
  },
  moves: [
    {
      name: String,
      lv: Number,
    },
  ],
};
const updatePokemon = (pos, obj) => {
  obj.id = response[pos].id;
  obj.name = response[pos].name;
  for (let i = 0; i < response[pos].types.length; i++) {
    obj.types.push(response[pos].types[i].type.name);
  }
  for (let ability of response[pos].abilities) {
    obj.abilities.push(ability.ability.name);
  }
  obj.attributes.attack = getStatus(pos,'attack');
  obj.attributes.defense = getStatus(pos,'defense');
  obj.attributes.hp = getStatus(pos,'hp');
  obj.attributes.specialAttack = getStatus(pos,'special-attack');
  obj.attributes.specialDefense = getStatus(pos,'special-defense');
  obj.attributes.speed = getStatus(pos,'speed');
};
const getStatus = (pos,status) => {
    const resultStatus = response[pos].stats.find((type=> type.stat.name == status));
    return resultStatus.base_stat;
};
const getMove = (pos)=>{
    const resultMoves = response[pos].moves.map(
        (move)=>{
            move.version_group_details.filter(
                (detail)=>{
                    (detail.version_group.name == 'red-blue' &&
                    detail.move_learn_method.name != 'machine' &&
                    detail.move_learn_method.name != 'tutor')     
                }
            ).map((detail)=>{
                return{ 
                    name: detail.move.name,
                    lv: detail.level_learned_at
                }
            });
        }
    );
    console.log(resultMoves);
}
getMove(0);
// updatePokemon(0, pokemon);
// console.log(pokemon.name, pokemon.attributes.speed);
