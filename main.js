const response = require("./api");

const adptarTipos = (tipos) => tipos.map((tipo) => tipo.type.name);

const adaptarHabilidades = (habilidades) => habilidades
  .map((habilidade) => habilidade.ability.name);

const filtraAtributos = (atributos, statName) => atributos
  .find((atributo) => atributo.stat.name === statName).base_stat

const adaptarMoves = (movimentos) => {
  return movimentos
    .map((move) => move.version_group_details
      .filter((detailsMove) => {
        return (
          detailsMove.version_group.name === "red-blue" &&
          detailsMove.move_learn_method.name !== "machine" &&
          detailsMove.move_learn_method.name !== "tutor"
        );
      })
      .map((nameRedBlue) => {
        return {
          name: move.move.name,
          level: nameRedBlue.level_learned_at,
        };
      })
    )
    .filter((test) => test[0])

    .map((arrayDeObjetos) => arrayDeObjetos[0])

    .sort((anterior, proximo) => anterior.level - proximo.level)
}

const adpatarPkm = (pokemon) =>
  pokemon.map((pkmObj) => {
    return {
      id: pkmObj.id,
      name: pkmObj.name,
      types: adptarTipos(pkmObj.types),
      abilities: adaptarHabilidades(pkmObj.abilities),
      attributes: {
        hp: filtraAtributos(pkmObj.stats, "hp"),
        attack: filtraAtributos(pkmObj.stats, "attack"),
        specialAttack: filtraAtributos(pkmObj.stats, "special-attack"),
        defense: filtraAtributos(pkmObj.stats, "defense"),
        specialDefense: filtraAtributos(pkmObj.stats, "special-defense"),
        speed: filtraAtributos(pkmObj.stats, "speed"),
      },
      moves: adaptarMoves(pkmObj.moves),
    };
  });
console.dir(adpatarPkm(response), { depth: 9999 });
