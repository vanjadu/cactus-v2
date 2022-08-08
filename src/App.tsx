import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { UserProvider } from './context/UserContext'
import { CartProvider } from './context/CartContext'
import './styles/app.sass'
import About from './screens/About'
import Cart from './screens/Cart'
import Contact from './screens/Contact'
import Home from './screens/Home'
import Login from './screens/Login'
import Register from './screens/Register'
import Profile from './screens/Profile'
import ErrorPage from './components/ErrorPage'
import Products from './screens/Products'
import ScrollTop from './utils/ScrollTop'
import Product from './screens/Product'
import Panel from './screens/Panel'
// extra
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AlterNav from './components/AlterNav'

function App() {
  const [alterNav, setAlterNav] = useState<boolean>(false)

  return (
    <div className='App'>
      <UserProvider>
        <CartProvider>
          <Navbar alterNav={alterNav} setAlterNav={setAlterNav} />
          <ToastContainer autoClose={2000} pauseOnHover={false} />
          <AlterNav alterNav={alterNav} />
          <ScrollTop>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/products' element={<Products />} />
              <Route path='/products/:id' element={<Product />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/panel' element={<Panel />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/*' element={<ErrorPage />} />
            </Routes>
          </ScrollTop>
          <Footer />
        </CartProvider>
      </UserProvider>
    </div>
  )
}

export default App
