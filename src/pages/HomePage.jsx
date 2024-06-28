import React, { useRef } from 'react'
import { setTrainer } from '../store/slices/trainer.slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './styles/homePage.css'

const HomePage = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const textInput = useRef()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(setTrainer(textInput.current.value.trim()))
        textInput.current.value = ''
        navigate('/pokedex')
    }

  return (  
    <div className='home'>
        <figure className='home_img'>
            <img src="../../../assets/pokedex.png" alt="pokedex image" />
        </figure>
        <h2 className='home_header'>¡Hi trainer!</h2>
        <p className='home_text'>Please type your name to start</p>
        <form className='home_form' onSubmit={handleSubmit}>
            <input className='home_input' ref={textInput} type="text"/>
            <button className='home_button'>Start</button>
        </form>
    </div>

  )
}

export default HomePage 