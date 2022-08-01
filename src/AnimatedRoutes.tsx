import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import About from './screens/About'
import Cart from './screens/Cart'
import Contact from './screens/Contact'
import Home from './screens/Home'
import Login from './screens/Login'
import Register from './screens/Register'
import Profile from './screens/Profile'
import ErrorPage from './components/ErrorPage'
import Products from './screens/Products'
import ScrollTop from './hooks/ScrollTop'
import Product from './screens/Product'

const AnimatedRoutes = (): JSX.Element => {
  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <ScrollTop>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<Product />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
      </ScrollTop>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
