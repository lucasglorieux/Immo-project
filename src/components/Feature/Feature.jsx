import React from 'react'

import House1 from '../../assets/house1.jpg'
import Bed1 from '../../assets/bed1.jpg'
import Bed2 from '../../assets/bed2.jpg'
import Kit1 from '../../assets/kit1.jpg'
import Sdb1 from '../../assets/sdb1.jpg'

import House2 from '../../assets/house2.jpg'
import Bed3 from '../../assets/bed3.jpg'
import Bed4 from '../../assets/bed4.jpg'
import Kit2 from '../../assets/kit2.jpg'
import Sdb3 from '../../assets/sdb3.jpg'

import './Feature.css'

const Feature = () => {
  return (
    <div className='featured'>
        <h1 className='featured-text'>Les Meilleures Annonces</h1>
        <p className='text'>Listes sélectionnées par Ville, État, code postal en fonction des consultations.</p>
        <div className='container'>
            <img className='span-3 image-grid-row-2' src={House1} alt='' />
            <img src={Bed1} alt='' />
            <img src={Bed2} alt='' />
            <img src={Kit1} alt='' />
            <img src={Sdb1} alt='' />
            <div className='span-3 img-details'>
                <div className='top'>
                    <h2>Le Raincy, France</h2>
                    <p>Maison à vendre</p>
                    <p className='price'>€5,320,000</p>
                </div>
                <div className='info-grid'>
                    <div>
                        <div className='info'>
                            <p className='bold'>Chambres:</p><p>5</p>
                        </div>
                        <div className='info'>
                            <p className='bold'>Salle de bain:</p><p>6</p>
                        </div>
                        <div className='info'>
                            <p className='bold'>Surface de la maison:</p><p>310m2</p>
                        </div>
                        <div className='info'>
                            <p className='bold'>Surface du Terrain:</p><p>2100m2</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='span-2 right-img-details'>
                <p>Splendide villa, toute équipé, en banlieu de Paris, sur la commune du Raincy, piscine de belle taille.
                    Espace de travail, ainsi qu'un sauna.
                </p>
                <button className='btn'>Voir les détails</button>
            </div>
            {/* section */}
        </div> 
        <div className='container'>
            <img className='span-3 image-grid-row-2' src={House2} alt='' />
            <img  src={Bed3} alt='' />
            <img src={Bed4} alt='' />
            <img src={Kit2} alt='' />
            <img src={Sdb3} alt='' />

            <div className='span-2 right-img-details'>
                <p>Splendide villa, toute équipé, en bord de plage, sur la commune de Marseille, piscine de belle taille.
                    Incroyable éxtérieur, la Villa a était décoré par un designer.
                </p>
                <button className='btn'>Voir les détails</button>
            </div>  

            <div className='span-3 img-details'>
                <div className='top'>
                    <h2>Marseille, France</h2>
                    <p>Maison à vendre</p>
                    <p className='price'>€3,320,000</p>
                </div>
                <div className='info-grid'>
                    <div>
                        <div className='info'>
                            <p className='bold'>Chambres:</p><p>3</p>
                        </div>
                        <div className='info'>
                            <p className='bold'>Salle de bain:</p><p>5</p>
                        </div>
                        <div className='info'>
                            <p className='bold'>Surface de la maison:</p><p>240m2</p>
                        </div>
                        <div className='info'>
                            <p className='bold'>Surface du Terrain:</p><p>4500m2</p>
                        </div>
                    </div>
                </div>
            </div>
         </div>   
    </div>
  )
}

export default Feature