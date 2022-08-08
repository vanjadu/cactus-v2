import React, { createContext, useEffect } from 'react'

interface CartPops {
  cart: any
  setCart: (cart: any) => void
  addToCart: (product: any) => void
  bill: number
  total: number
}

const CartContext = createContext({} as CartPops)

interface Props {
  children?: React.ReactNode
}

const CartProvider = ({ children }: Props) => {
  const [cart, setCart] = React.useState<Array<any>>([])
  const [bill, setBill] = React.useState<number>(0)
  const [total, setTotal] = React.useState<number>(0)

  const addToCart = (product: any) => {
    const { sum, id }: { sum: number; id: string } = product
    const set = new Set()
    let d = new Date()
    let hour = d.getHours()

    if (cart.length) {
      const newCart = [...cart, { ...product }]

      const filteredCart = newCart.filter((item) => {
        const duplicate = set.has(item.id)

        if (item.id === id && sum !== 1) {
          item.sum = sum
          item.price = item.price * item.sum
        }
        setTotal((prev) => prev + item.price)

        set.add(item.id)

        return !duplicate
      })

      return setCart(filteredCart)
    }

    setCart([{ hour }, ...cart, { ...product }])
  }

  useEffect(() => {
    if (cart.length) {
      const stringifyCart = JSON.stringify(cart)
      localStorage.setItem('cart', stringifyCart)

      let bill = 0
      const filteredCart = cart.filter((item) => !item.hour)

      filteredCart.forEach((item) => {
        bill = bill + item.pice
      })

      setBill(bill)
    }
  }, [cart])

  useEffect(() => {
    const cart = localStorage.getItem('cart')

    if (cart) {
      const parsedCart = JSON.parse(cart)
      setCart(parsedCart)
    }
  }, [])

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        bill,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }
