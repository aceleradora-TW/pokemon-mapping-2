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
  obj.attributes.attack = getStatus(pos, "attack");
  obj.attributes.defense = getStatus(pos, "defense");
  obj.attributes.hp = getStatus(pos, "hp");
  obj.attributes.specialAttack = getStatus(pos, "special-attack");
  obj.attributes.specialDefense = getStatus(pos, "special-defense");
  obj.attributes.speed = getStatus(pos, "speed");
};
const getStatus = (pos, status) => {
  const resultStatus = response[pos].stats.find(
    (type) => type.stat.name == status
  );
  return resultStatus.base_stat;
};
const getMoveLevel = (pos) => {
  let level = [];
  const resultMoves = response[pos].moves.map(
    (move) => {
      return move.version_group_details.filter((detail)=>{
        if(detail.version_group.name == 'red-blue' && detail.level_learned_at>0){
          return detail.level_learned_at
        }
      })
    }
  );
  resultMoves.forEach((moves)=>{
    moves.forEach((move)=>{
      if(move){
        level.push(move.level_learned_at)
      }
    })
  });
  console.log(level)
  return level;
};
// const getMoveName = (pos)=>{
//   let name =[];
//   const level = getMoveLevel();
//   const resultMovesNames = response[pos].moves.map(
//     (move) => {
//       return move.version_group_details.filter((detail)=>{
//         if(detail.version_group.name == 'red-blue' && detail.level_learned_at>0){
//           return move.move.name
//         }
//       })
//     }
//   );
//   console.log(resultMovesNames);
// }
getMoveLevel(0);
// updatePokemon(0, pokemon);
// console.log(pokemon.name, pokemon.attributes.speed);
