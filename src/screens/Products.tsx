import React from 'react'
import { motion } from 'framer-motion'
import ProductsHero from '../components/Products/ProductsHero'
import ProductsItems from '../components/Products/ProductsItems'

const Products = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ProductsHero />
      <ProductsItems />
    </motion.div>
  )
}

export default Products
