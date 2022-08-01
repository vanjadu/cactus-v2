import React from 'react'
import { motion } from 'framer-motion'
import HomeHero from '../components/Home/HomeHero'
import HomeCategory from '../components/Home/HomeCategory'
import HomeUs from '../components/Home/HomeUs'
import HomeSuprise from '../components/Home/HomeSuprise'
import HomeItems from '../components/Home/HomeItems'

const Home = (): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HomeHero />
      <HomeItems />
      <HomeCategory />
      <HomeUs />
      <HomeSuprise />
    </motion.div>
  )
}

export default Home
