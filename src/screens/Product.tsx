import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import SingleProduct from '../components/SingleProduct'

const Product = (): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SingleProduct />
    </motion.div>
  )
}

export default Product
