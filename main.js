const response = require("./api");
/*
Apenas os moves que são da versão red-blue devem ser retornados para o objeto.
Ordenar os moves em ordem crescente
Não devem ser filtrados moves que tenha move_learn_method.name igual a machine ou tutor
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);
*/

const filtraAtributos = (atributos, statName) => {
  return atributos.find((atributo) => atributo.stat.name === statName);
};

const adptarTipos = (tipos) => {
  return tipos.map((tipo) => {
    return tipo.type.name;
  });
};

const adaptarHabilidades = (habilidades) => {
  return habilidades.map((habilidade) => {
    return habilidade.ability.name;
  });
};
const adpatarPkm = (pokemon) => {
  return pokemon.map((pkmObj) => {
    console.log(filtraAtributos(pkmObj.stats));
    return {
      id: pkmObj.id,
      name: pkmObj.name,
      types: adptarTipos(pkmObj.types), // Array de string
      abilities: adaptarHabilidades(pkmObj.abilities), // Array de string
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
          name: String,
          lv: Number,
        },
      ],
    };
  });
};
console.dir(adpatarPkm(response), { depth: 9999 });
//const resultPokemon = response.map((pkmObj) => {

//});

//const pokemon = adapterPokemon(response);
//console.dir(pokemon, { depth: 999 });
