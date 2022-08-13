import React, { createContext, useState, useEffect } from 'react'
import CartItem from '../types/CartItem'

interface ContextProps {
  cart: CartItem[]
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>
  total: number
  setTotal: React.Dispatch<React.SetStateAction<number>>
}

const CartContext = createContext({} as ContextProps)

interface ProviderProps {
  children: React.ReactNode
}

const CartProvider = ({ children }: ProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([])
  const [total, setTotal] = useState<number>(0)

  const contextValues: ContextProps = {
    cart,
    setCart,
    total,
    setTotal,
  }

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }
