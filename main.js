const response = require("./api");

const adapterAbilities = (abilities) => {
  return abilities.map((ab) => ab.ability.name);
};

const adapterAttributes = (pokemon, atributo) => {
  return pokemon.stats.find((stat) => stat.stat.name === atributo).base_stat;
};

const verifyIfMachineOrTutorandRedBlue = (move) => {
  return move.version_group_details.find(
    (mt) =>
      mt.version_group.name === "red-blue" &&
      !(
        mt.move_learn_method.name === "machine" ||
        mt.move_learn_method.name === "tutor"
      )
  );
};

const adapterMoves = (moves) => {
  return moves
    .filter((mv) => verifyIfMachineOrTutorandRedBlue(mv))
    .map((mv) => {
      return {
        name: mv.move.name,
        lv: mv.version_group_details.find(
          (mv) => mv.version_group.name === "red-blue"
        ).level_learned_at,
      };
    });
};

const adapterPokemon = (response) => {
  return response.map((pokemon) => {
    return {
      id: pokemon.id,
      name: pokemon.name,
      abilities: adapterAbilities(pokemon.abilities),
      attributes: {
        hp: adapterAttributes(pokemon, "hp"),
        attack: adapterAttributes(pokemon, "attack"),
        specialAttack: adapterAttributes(pokemon, "special-attack"),
        defense: adapterAttributes(pokemon, "defense"),
        specialDefense: adapterAttributes(pokemon, "special-defense"),
        speed: adapterAttributes(pokemon, "speed"),
      },
      moves: adapterMoves(pokemon.moves),
    };
  });
};

const pokemon = adapterPokemon(response);
console.dir(pokemon, { depth: 999 });
