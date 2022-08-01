import React, { useState, useEffect, createContext } from 'react'
import { useLocation } from 'react-router-dom'

const UserContext = createContext({} as UserProps)

interface UserContextProps {
  children: React.ReactNode
}

interface UserProps {
  user: any
  setUser: (user: any) => void
  loading: boolean
  setLoading: (loading: boolean) => void
}

const UserProvider = ({ children }: UserContextProps) => {
  const [user, setUser] = useState<any | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const location = useLocation()

  const checkUser = () => {
    try {
      const loggedUser = JSON.parse(localStorage.getItem('user') || 'null')

      setUser(loggedUser)
    } catch (error) {
      console.log(error)
      setUser(null)
    }
  }

  useEffect(() => {
    checkUser()
  }, [location.pathname])

  const userValues: UserProps = {
    user,
    setUser,
    loading,
    setLoading,
  }

  return (
    <UserContext.Provider value={userValues}>{children}</UserContext.Provider>
  )
}

export { UserContext, UserProvider }
