import React from 'react'
import {FaFacebook, FaInstagram, FaPinterest, FaTwitter} from 'react-icons/fa'

import './Footer.css'
const Footer = () => {
  return (
    
      <div className='footer'>
        <div className='social'>
          <FaFacebook className='icon' />
          <FaInstagram className='icon' />
          <FaPinterest className='icon' />
          <FaTwitter className='icon' />
        </div>
        <div className='container'>
          <div className='col'>
            <h3>À propos</h3>
            <p>L'Entrepise</p>
            <p>Détails</p>
            <p>Planning</p>
            <p>À notre propos</p>
          </div>
          <div className='col'>
            <h3>House Sellers</h3>
            <p>Notre futur</p>
            <p>Recrutement</p>
            <p>Horaires</p>
            <p>Développement</p>
          </div>
          <div className='col'>
            <h3>Mention légal</h3>
            <p>Termes</p>
            <p>Police</p>
            <p>Avertissement</p>
          </div>
          <div className='col'>
            <h3>Information</h3>
            <p>Créateur</p>
            <p>Financement</p>
            <p>Fondement</p>
          </div>
        </div>
      </div>
    
  )
}

export default Footer