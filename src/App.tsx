import React, { useState } from 'react'
import AnimatedRoutes from './AnimatedRoutes'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { UserProvider } from './context/UserContext'
import './styles/app.sass'
// extra
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AlterNav from './components/AlterNav'

function App() {
  const [alterNav, setAlterNav] = useState<boolean>(false)

  return (
    <div className='App'>
      <UserProvider>
        <Navbar alterNav={alterNav} setAlterNav={setAlterNav} />
        <ToastContainer autoClose={2000} pauseOnHover={false} />
        <AlterNav alterNav={alterNav} />
        <AnimatedRoutes />
        <Footer />
      </UserProvider>
    </div>
  )
}

export default App
