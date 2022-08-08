import React from 'react'
import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'
import { TabTitle } from '../utils/NewTitle'

const Contact = (): JSX.Element => {
  TabTitle('Cactus Gift Shop: Kontakt')
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ContactForm />
    </motion.div>
  )
}

export default Contact
