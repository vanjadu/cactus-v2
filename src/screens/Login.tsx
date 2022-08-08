import React, { useContext } from 'react'
import LoginForm from '../components/Login/LoginForm'
import { motion } from 'framer-motion'
import { UserContext } from '../context/UserContext'
import ErrorPage from '../components/ErrorPage'
import { TabTitle } from '../utils/NewTitle'

const Login = (): JSX.Element => {
  TabTitle('Cactus Gift Shop: Prijavite se')

  const { user } = useContext(UserContext)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {user ? <ErrorPage /> : <LoginForm />}
    </motion.div>
  )
}

export default Login
