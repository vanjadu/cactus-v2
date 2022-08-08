import React, { useState, useEffect, useContext } from 'react'
import './singleproduct.sass'
import { motion } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import { db } from '../../firebase/firebase-config'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import Loader from '../Loader'
import patternImage from '../../assets/patttern.jpg'
import { FiPlusSquare, FiMinusSquare } from 'react-icons/fi'
import { CartContext } from '../../context/CartContext'

const Product = (): JSX.Element => {
  const [item, setItem] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const getItem = async () => {
      setLoading(true)
      try {
        const shopItems = collection(db, 'items')

        const q = query(shopItems, orderBy('category', 'asc'))
        const querySnap = await getDocs(q)

        let products = [] as any[]

        querySnap.forEach((doc: any) => {
          return products.push({
            id: doc.id,
            data: doc.data(),
          })
        })

        setItem(products.find((item: any) => item.id === id))
        setLoading(false)
      } catch (error: any) {
        console.log(error.message)
        setItem(null)
        setLoading(false)
      }
    }

    getItem()
  }, [id])

  // to cart logic
  const { addToCart } = useContext(CartContext)

  const [sum, setSum] = useState<number>(1)

  const newCart = {
    id: item?.id,
    name: item?.data.name,
    sum,
    image: item?.data.image,
    price: item?.data.price,
  }

  const increaseHandler = () => setSum((sum) => sum + 1)
  const decreaseHandler = () => sum > 1 && setSum((sum) => sum - 1)

  const onChangeHandler = (e: { target: { value: string } }) => {
    const value: number = parseInt(e.target.value)

    if (value === 0) {
      return setSum(value + 1)
    }

    setSum(value)
  }

  const addToCartHandler = (): void => {
    addToCart(newCart)
    navigate('/cart')
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className='single-product'>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className='single-product__image-container'>
              <img
                src={item?.data.image}
                alt=''
                className='single-product__image'
              />
            </div>
            <div className='single-product__content'>
              <h1 className='single-product__title'>{item?.data.name}</h1>
              <p className='single-product__desc'>
                Dimenzije: <span>{item?.data.desc}</span>
              </p>
              <p className='single-product__price'>{item?.data.price},00 RSD</p>
              <div className='single-product__form'>
                <p className='single-product__quant-title'>Kolicina:</p>
                <div className='single-product__quant'>
                  <button
                    onClick={decreaseHandler}
                    className='single-product__quant-btn'
                  >
                    <FiMinusSquare className='single-product__quant-icon' />
                  </button>
                  <input
                    type='number'
                    min='1'
                    value={sum}
                    onChange={onChangeHandler}
                    className='single-product__input'
                  />
                  <button
                    onClick={increaseHandler}
                    className='single-product__quant-btn'
                  >
                    <FiPlusSquare className='single-product__quant-icon' />
                  </button>
                </div>
                <button
                  onClick={addToCartHandler}
                  className='single-product__sub-btn'
                >
                  Dodajte u korpu
                </button>
              </div>
            </div>
            <img
              src={patternImage}
              alt='Cactus Gift Shop'
              className='single-product__back'
            />
          </>
        )}
      </section>
    </motion.div>
  )
}

export default Product
