import React from 'react'
import './singleitem.sass'
import { Link, useNavigate } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'

interface SingleItemProps {
  identifier?: string
  name?: string
  image?: string
  price?: number
  category?: string
}

const SingleItem = ({
  identifier,
  name,
  image,
  price,
  category,
}: SingleItemProps) => {
  const navigate = useNavigate()

  return (
    <Link to={`/products/${identifier}`}>
      <div className='single'>
        <div className='single__image-container'>
          <img src={image} alt={name} className='single__image' />
        </div>
        <p className='single__cat'>{category}</p>
        <h4 className='single__title'>{name}</h4>
        <p className='single__price'>{price},00 RSD</p>
        <p
          onClick={() => navigate(`/product/${identifier}`)}
          className='single__link'
        >
          Dodajte u korpu <FiArrowUpRight className='single__link-icon' />
        </p>
      </div>
    </Link>
  )
}

export default SingleItem
