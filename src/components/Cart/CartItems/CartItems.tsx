import React, { useContext } from 'react'
import './cartitems.sass'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'

const CartItems = (): JSX.Element => {
  const { cart, bill } = useContext(CartContext)

  return (
    <section className='citems'>
      <div className='citems__container'>
        <h1 className='citems__title'>
          {cart.length ? 'Dodati artikli' : 'Korpa je prazna'}
        </h1>
        <p className='citems__desc'>
          {cart.length
            ? 'Dodatne informacije o narucivanju artikala mozete videti na dnu stranice.'
            : 'Da biste dodali artikle u korpu, kliknite na dugme "Dodaj u korpu" ispod slike artikla.'}
        </p>
        <ul className='citems__items'>
          {cart.length
            ? cart.map((item: any, i: any) => (
                <li key={i} className='citems__card'>
                  <img
                    src={item.image}
                    alt={item.name}
                    className='citems__img'
                  />
                  <a href={`/products/${item.id}`} className='citems__name'>
                    {item.name}
                  </a>
                  <p className='citems__quant'>
                    Količina: <span>{item.sum}</span>
                  </p>
                  <p className='citems__price'>{item.price},00 RSD</p>
                </li>
              ))
            : null}
        </ul>
        <p>{bill}</p>
      </div>
    </section>
  )
}

export default CartItems
