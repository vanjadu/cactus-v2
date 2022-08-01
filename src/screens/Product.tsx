import React from 'react'
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'

const Product = (): JSX.Element => {
  const { id } = useParams()

  return (
    <motion.div
      style={{ marginTop: '10rem' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Product page for product: {id}</h1>
    </motion.div>
  )
}

export default Product
