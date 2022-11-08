const response = require("./api");
/*
Apenas os moves que são da versão red-blue devem ser retornados para o objeto.
Ordenar os moves em ordem crescente
Não devem ser filtrados moves que tenha move_learn_method.name igual a machine ou tutor
*/
const adaptarHabilidades = (habilidade) => {
 let teste;
  habilidade.map((valor)=>{
 valor.abilities.map((valor2)=>{
  teste = valor2.ability.name
 // console.log(valor2.ability.name)
 })
 })
 
}
adaptarHabilidades(response)


const pkm = {
  id: Number,
  name: String,
  types: [], // Array de string
  abilities: [], // Array de string
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

//const pokemon = adapterPokemon(response);
//console.dir(pokemon, { depth: 999 });
