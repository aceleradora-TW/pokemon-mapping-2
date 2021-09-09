import { useEffect, useState } from 'react'
import { adapterPokemon } from './adapters/pokemon-adapter'
import Attributes from './components/attributes'
import Moves from './components/moves'
import Perfil from './components/perfil'
import Search from './components/search'

import './index.css'

const App = () => {

  const [state, setState] = useState()

  const getPokemon = name => {
    const urlBase = "https://pokeapi.co/api"
    const version = 'v2'
    const endpoint = 'pokemon'
    const pokemonName = name.replace(" ", "-").toLowerCase()

    fetch(`${urlBase}/${version}/${endpoint}/${pokemonName}`)
      .then(res => res.json())
      .then(res => {
        const pokemons = adapterPokemon([res])
        setState(pokemons.pop())
      }).catch(err => {
        console.log(err)
      })
  }

  const handleChange = (event) => {
    const { value } = event.target
    getPokemon(value)
  }

  useEffect(() => {
    getPokemon("bulbasaur")
  }, [])

  return (
    <div className="app">
      {state ?
        (
          <div className="pokedex">
            <Search onChange={handleChange} />
            <div className="container">
              <Perfil pokemon={state} />
              <Moves moves={state?.moves} />
              <Attributes attributes={state?.attributes} />
            </div>
          </div>
        ) : null}
    </div>
  );
}

export default App;
