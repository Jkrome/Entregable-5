import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../hooks/useFetch'
import PokeCard from '../components/pokedex/PokeCard'
import PokeSelect from '../components/pokedex/PokeSelect'
import './styles/pokedex.css'
import Paginate from '../components/Paginate'

const Pokedex = () => {

    const trainer = useSelector((store) => store.trainer)
    const [inputValue, setInputValue] = useState('')
    const [typeFilter, setTypeFilter] = useState('')
    const [page, setPage] = useState(1)


    const [pokemons, getPokemons, getType] = useFetch()

    useEffect(() => {
        if (typeFilter) {
            getType(typeFilter)
            setPage(1)
        } else{
            const url = 'https://pokeapi.co/api/v2/pokemon'
            getPokemons(url)            
        }
    }, [typeFilter])

    const textInput = useRef()
    const handleSubmit = (event) => {
      event.preventDefault()
      setInputValue(textInput.current.value.trim().toLowerCase())
      textInput.current.value = ''
    }
    const cbFilter = (poke) => {
        return poke.name.includes(inputValue)
    }

    const quantity = 5
    const total = Math.ceil(pokemons?.results.length /quantity)
    const pagination = () => {
      const end = quantity * page
      const start = end - quantity
      const poker = pokemons?.results.filter(cbFilter).slice(start,end)
      return [poker]
    }
  
  return (
    <div className='pokedex'>
        <h3 className='pokedex_wave'><span>Welcome {trainer},</span> Here you can find your favorite Pokémon</h3>
        <div className='pokedex_filters'>
            <form className='pokedex_form' onSubmit={handleSubmit}>
                <input ref={textInput} type="text" />
                <button>Search</button>
            </form>
            <PokeSelect
                setTypeFilter={setTypeFilter}
            />
        </div>
        <div className='pokedex_container'>
            {
                pagination()[0]?.map((poker) => (
                    <PokeCard
                      key={poker.url}
                      url={poker.url}
                    />
            ))
            }
        </div>
        <Paginate
              setPage = {setPage}
              page = {page}
              total = {total}
            />
    </div>
  )
}

export default Pokedex