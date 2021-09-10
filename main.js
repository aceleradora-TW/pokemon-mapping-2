const response = require("./api")

const capitalize = (string) => {
    // se a palavra nao for válida retornará null
    if (!isValid(string)) return null
  
    // caso seja válida, vai separar as palavras por espaço e criar um array com elas
    let words = string.split(" ")
    // com esse array, utilizo o map para conseguir transformar a primeira inicial de cada palavra em maiuscula
    return words.map(
      (word) => `${word[0].toUpperCase()}${word.substring(1)}`
    ).join(" ") //ao final, uso join para juntar o array novamente em uma palavra apenas
  }

function obterNumeros(pokemon) {return parseInt(pokemon)}
const formatNumber = number => parseFloat(number.toFixed(1))


const buscarnome = (lista) => {
  
    const buscandoNome = lista.find((response) => response === 'name' )
    return buscandoNome

    // const inventory = [
    //     {name: 'apples', quantity: 2},
    //     {name: 'bananas', quantity: 0},
    //     {name: 'cerejas', quantity: 5}
    // ];
    
    // function isCherries(fruit) {
    //     return fruit.name === 'cerejas';
    // }
    
    // console.log(inventory.find(isCherries));
    // // { name: 'cerejas', quantity: 5 }


    // const spaces = "   "
    // return `${spaces} Lv ${capitalize(name.forms.name)} - ${obterNumeros(id.id)}`
    
  }





const imprimir = () =>{
console.log(buscarnome(response));
    
}

imprimir()

// const pokemon = {
//     id: Number,
//     name: String,
//     types: Array, // Array de string
//     abilities: Array, // Array de string
//     attributes: {
//       hp: Number,
//       attack: Number,
//       specialAttack: Number,
//       defense: Number,
//       specialDefense: Number,
//       speed: Number
//     },