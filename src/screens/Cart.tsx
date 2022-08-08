import React from 'react'
import CartItems from '../components/Cart/CartItems'
import { TabTitle } from '../utils/NewTitle'

const Cart = (): JSX.Element => {
  TabTitle('Cactus Gift Shop: Korpa')

  return (
    <>
      <CartItems />
    </>
  )
}

export default Cart
