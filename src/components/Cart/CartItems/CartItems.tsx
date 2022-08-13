import React, { useContext } from 'react'
import './cartitems.sass'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'

const CartItems = (): JSX.Element => {
  const { cart, total } = useContext(CartContext)

  return (
    <section className='citems'>
      <div className='citems__container'>
        <h1 className='citems__title'>Dodati artikli</h1>
        <p className='citems__desc'>
          Dodatne informacije o narucivanju artikala mozete videti na dnu
          stranice.
        </p>
        <ul className='citems__items'>
          {cart?.map((item: any, i: any) => (
            <li key={i} className='citems__card'>
              <img src={item.image} alt={item.name} className='citems__img' />
              <Link to={`/products/${item.id}`} className='citems__name'>
                {item.name}
              </Link>
              <p className='citems__quant'>
                Količina: <span>{item.quant}</span>
              </p>
              <p className='citems__price'>{item.price},00 RSD</p>
            </li>
          ))}
        </ul>
        <p>{total}</p>
      </div>
    </section>
  )
}

export default CartItems
