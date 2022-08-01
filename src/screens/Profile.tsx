import React, { useContext } from 'react'
import { auth } from '../firebase/firebase-config'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import Loader from '../components/Loader'
import { motion } from 'framer-motion'
import ErrorPage from '../components/ErrorPage'
import ProfileHero from '../components/Profile/ProfileHero'

const Profile = () => {
  const { user, setUser, loading, setLoading } = useContext(UserContext)
  const navigate = useNavigate()

  const logoutHandler = () => {
    setLoading(true)
    auth.signOut()

    setUser(null)
    localStorage.removeItem('user')

    setLoading(false)
    navigate('/')
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {user ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ProfileHero />
              <button onClick={logoutHandler}>Izlogujte se</button>
            </motion.div>
          ) : (
            <ErrorPage />
          )}
        </>
      )}
    </>
  )
}

export default Profile
