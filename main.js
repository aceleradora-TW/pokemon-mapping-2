const response = require("./api");

const filtraAtributos = (atributos, statName) =>
  atributos.find((atributo) => atributo.stat.name === statName);

const adptarTipos = (tipos) => tipos.map((tipo) => tipo.type.name);

const adaptarHabilidades = (habilidades) =>
  habilidades.map((habilidade) => habilidade.ability.name);

const adaptarMoves = (movimentos) => {
  return movimentos
    .filter((move) => {
      return move.version_group_details.find((detailsMove) => {
        return detailsMove.version_group.name === "red-blue";
        //console.log(detailsMove.version_group.name)
      });
    })
    .map((nameRedBlue) => {
      return {
        name: nameRedBlue.move.name,
        level: 'lv5'
      };
    });
};

// movimento.filter(filtrarMovi => filtrarMovi == version_group)
const adpatarPkm = (pokemon) =>
  pokemon.map((pkmObj) => {
    // console.log(adaptarMoves(pkmObj.moves));
    return {
      id: pkmObj.id,
      name: pkmObj.name,
      types: adptarTipos(pkmObj.types),
      abilities: adaptarHabilidades(pkmObj.abilities),
      attributes: {
        hp: filtraAtributos(pkmObj.stats, "hp").base_stat,
        attack: filtraAtributos(pkmObj.stats, "attack").base_stat,
        specialAttack: filtraAtributos(pkmObj.stats, "special-attack")
          .base_stat,
        defense: filtraAtributos(pkmObj.stats, "defense").base_stat,
        specialDefense: filtraAtributos(pkmObj.stats, "special-defense")
          .base_stat,
        speed: filtraAtributos(pkmObj.stats, "speed").base_stat,
      },
      moves: [
        {
          name: adaptarMoves(pkmObj.moves),
          lv: Number,
        },
      ],
    };
  });
//const adaptarMoves = (movimentos) => movimentos.map((movimento) => movimento.moves)
//adaptarMoves(response.moves)
console.dir(adpatarPkm(response), { depth: 9999 });

/*

const adaptarMoves = (movimentos) => {
  movimentos.map((move) => {
    move.version_group_details.map((valor2)=>{
      valor2
    });
  });

*/
