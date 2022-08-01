import React from 'react'
import './singleitem.sass'
import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'

interface SingleItemProps {
  link?: string
  name?: string
  image?: string
  price?: number
  category?: string
}

const SingleItem = ({
  link,
  name,
  image,
  price,
  category,
}: SingleItemProps) => {
  return (
    <div className='single'>
      <div className='single__image-container'>
        <img src={image} alt={name} className='single__image' />
      </div>
      <p className='single__cat'>{category}</p>
      <Link to={`/products/${link}`}>
        <h4 className='single__title'>{name}</h4>
      </Link>
      <p className='single__price'>{price},00 RSD</p>
      <Link to={`/products/${link}`} className='single__link'>
        Dodajte u korpu <FiArrowUpRight className='single__link-icon' />
      </Link>
    </div>
  )
}

export default SingleItem
