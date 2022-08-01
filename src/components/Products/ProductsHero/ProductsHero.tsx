import React, { useContext } from 'react'
import './productshero.sass'
import shopImg from '../../../assets/home/gift.jpeg'
import { UserContext } from '../../../context/UserContext'

const ProductsHero = () => {
  const { user } = useContext(UserContext)

  return (
    <section className='p-hero'>
      <div className='p-hero__image-container'>
        <img src={shopImg} alt='' className='p-hero__image' />
      </div>
      <h1 className='p-hero__title'>{user?.displayName} Nudimo Vam</h1>
    </section>
  )
}

export default ProductsHero
