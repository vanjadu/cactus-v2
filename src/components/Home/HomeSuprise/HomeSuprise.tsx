import React, { useContext } from 'react'
import './homesuprise.sass'
import { Link } from 'react-router-dom'
import { FiGift } from 'react-icons/fi'
import cards from './data'
import { UserContext } from '../../../context/UserContext'

const HomeSuprise = () => {
  const { user } = useContext(UserContext)

  return (
    <section className='sup'>
      <h1 className='sup__title'>
        {user?.displayName} <span>Iznenadite</span> nekoga
      </h1>
      <p className='sup__desc'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit,
        aspernatur.
      </p>
      <div className='sup__container'>
        {cards.map((card: any, i: any) => (
          <div key={i} className='sup__card'>
            <img src={card.img} alt='Cactus Gift Shop' className='sup__image' />
            <p className='sup__card-desc'>{card.desc}</p>
          </div>
        ))}
      </div>
      <Link to='/products' className='sup__link'>
        Poklonite iznenadjenje <FiGift className='sup__link-icon' />
      </Link>
    </section>
  )
}

export default HomeSuprise
