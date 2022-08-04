import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import { db } from '../firebase/firebase-config'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import Loader from '../components/Loader'

const Product = (): JSX.Element => {
  const [item, setItem] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const { id } = useParams()

  useEffect(() => {
    const getItem = async () => {
      setLoading(true)
      try {
        const shopItems = collection(db, 'items')

        const q = query(shopItems, orderBy('category', 'asc'))
        const querySnap = await getDocs(q)

        let menuItems = [] as any[]

        querySnap.forEach((doc: any) => {
          return menuItems.push({
            id: doc.id,
            data: doc.data(),
          })
        })

        setItem(menuItems.find((item: any) => item.id === id))
        setLoading(false)
      } catch (error: any) {
        console.log(error.message)
        setItem(null)
        setLoading(false)
      }
    }

    getItem()
  }, [])

  console.log(item)

  return (
    <motion.div
      style={{ marginTop: '10rem' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {loading ? <Loader /> : item?.data.name}
    </motion.div>
  )
}

export default Product
