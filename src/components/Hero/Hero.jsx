import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='content'>
            <h1>Trouver l'endroit parfait.</h1>
            <p className='search-text'>Trouver les meilleurs appartements, maison haut de gamme, le tout au même endroit </p>
            <form className='search'>
                <div>
                    <input type='text' placeholder='Mot clés' />
                </div>
                <div className='radio'>
                    <input type='radio' checked />
                    <label>Achat</label>
                    <input type='radio' />
                    <label>Location</label>
                    <button type='submit'><AiOutlineSearch className='icon'/></button>
                </div>
            </form>
        </div>       
    </div>
  )
}

export default Hero