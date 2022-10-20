import {useEffect, useState} from 'react'
import PokemonThumbnail from './Components/PokemonThumbnail'

function App() {

  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const getAllPokemons = async () => { 
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    const createPokemonObject = (result) => { 
      result.forEach( async (pokemon) => {
        const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()

        setAllPokemons(currentList => [...currentList, data])
       
      })
    }
    createPokemonObject(data.results)
  }

  useEffect(() => { 
   getAllPokemons() 
  },[])

  
  
  
  return (
   <div className='flex flex-col items-center justify-center min-h-100 px-3 py-0.5'>
      <h1>Pokemon Evolution</h1>
      <div className='flex flex-col align-center justify-center'>
        <div className='flex flex-wrap items-center justify-center'>
        {allPokemons.map((pokemon, index) => 
           <PokemonThumbnail 
           id={pokemon.id}
           name={pokemon.name}
           image={pokemon.sprites.other.dream_world.front_default}
           type={pokemon.types[0].type.name}
           key={index}
           />
        )}
        </div>
      </div>
      <button onClick={()=> getAllPokemons()}>Load More</button>
   </div>
  )
}

export default App;
