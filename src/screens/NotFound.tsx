import React from 'react'
import ErrorPage from '../components/ErrorPage'
import { motion } from 'framer-motion'

const NotFound = (): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ErrorPage />
    </motion.div>
  )
}

export default NotFound
