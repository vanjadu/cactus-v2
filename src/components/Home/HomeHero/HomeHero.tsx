import React, { useContext } from 'react'
import './homehero.sass'
import { Link } from 'react-router-dom'
import heroImage from '../../../assets/home/hero.svg'
import { UserContext } from '../../../context/UserContext'

const HomeHero = (): JSX.Element => {
  const { user } = useContext(UserContext)

  return (
    <section className='hero'>
      <div className='hero__text'>
        <h1 className='hero__title'>
          {user?.displayName} Iznenadite svoje
          <br />
          Voljene posebnim
          <br />
          <span>Poklonom</span>
        </h1>
        <p className='hero__desc'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore quis
          illo quasi impedit deleniti omnis!
        </p>
        <Link to='/products' className='hero__cta'>
          Izaberite poklone
        </Link>
      </div>
      <img src={heroImage} alt='Cactus Gift Shop' className='hero__img' />
    </section>
  )
}

export default HomeHero
