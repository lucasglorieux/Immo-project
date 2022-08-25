import React, {useState} from 'react'
import {RiMenu4Fill} from 'react-icons/ri';
import {FaRegTimesCircle} from 'react-icons/fa';
import {BsFillHouseFill} from 'react-icons/bs';

import './Navbar.css'

const Navbar = () => {

const [burger, setBurger] = useState(false)
const handleClick = () => setBurger(!burger)

  return (
    <div className='navbar'>
        <div className='container'>
          <h1><span><BsFillHouseFill />LG </span>Immo</h1>
          <button className='btn'>Connexion</button>
          <ul className={burger ? 'nav-menu active' : 'nav-menu'}>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>Rechercher</a></li>
            <li><a href='/'>A propos</a></li>
            <li><a href='/'>Contact</a></li>
          </ul>
          <div className='hamburger' onClick={handleClick}>
            {burger ? (<FaRegTimesCircle className='icon' />) : (<RiMenu4Fill className='icon' />) }
            
          </div>
        </div>
    </div>
  )
}

export default Navbar