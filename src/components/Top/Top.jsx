import React from 'react'
import Apart1 from '../../assets/apart1.jpg'
import Apart2 from '../../assets/apart2.jpg'
import Apart3 from '../../assets/apart3.jpg'

import './Top.css'

const Top = () => {
  return (
    <div className='best'>
        <h1>Nos meilleurs logements</h1>
        <div>
            <p><span className='bold'>Tout</span></p>
            <p>Résidentiel</p>
            <p>Commercial</p>
        </div>
        <div className='container'>
            <img src={Apart1} alt='' />
            <img src={Apart2} alt='' />
            <img src={Apart3} alt='' />
        </div>
        <button className='btn'>Tout voir</button>
    </div>
  )
}

export default Top