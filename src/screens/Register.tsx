import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import RegisterForm from '../components/Register/RegisterForm'
import { UserContext } from '../context/UserContext'
import ErrorPage from '../components/ErrorPage'

const Register = (): JSX.Element => {
  const { user } = useContext(UserContext)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {user ? <ErrorPage /> : <RegisterForm />}
    </motion.div>
  )
}

export default Register
