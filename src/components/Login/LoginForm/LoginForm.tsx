import React, { useState, useContext } from 'react'
import './loginform.sass'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import logoImg from '../../../assets/logo.png'
import svgImg from '../../../assets/login.svg'
import { UserContext } from '../../../context/UserContext'
import { auth } from '../../../firebase/firebase-config'
import Loader from '../../Loader'

const SignInForm = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const navigate = useNavigate()

  const { setUser, loading, setLoading } = useContext(UserContext)

  const formHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    if (!email || !password) {
      toast.error('Popunite sva polja')
      setLoading(false)
      return
    }

    if (!email.includes('@') || !email.includes('.')) {
      toast.error('Email adresa nije ispravna')
      setLoading(false)
      return
    }

    if (email && password) {
      try {
        await signInWithEmailAndPassword(auth, email, password)
        const signedUser = auth.currentUser

        setUser(signedUser)
        localStorage.setItem('user', JSON.stringify(signedUser))

        toast.success('Uspesno ste se ulogovali')
        setLoading(false)
        navigate('/')
      } catch (error) {
        console.log(error)
        toast.error('Pogrešno korisničko ime ili lozinka')

        setLoading(false)
      }
    }
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className='sign'>
          <img src={svgImg} alt='sign in' className='sign__svg' />
          <div className='sign__container'>
            <img
              src={logoImg}
              alt='cactus gift shop logo'
              className='sign__logo'
            />
            <h1 className='sign__title'>Prijavite se</h1>
            <form className='sign__form' onSubmit={formHandler}>
              <input
                type='email'
                name='email'
                placeholder='Vas email'
                className='sign__input'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type='password'
                name='password'
                placeholder='Vasa lozinka'
                className='sign__input'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type='submit' className='sign__btn'>
                Prijavite se
              </button>
            </form>
            <Link to='/register' className='sign__fall'>
              Kreirajte nalog <FiArrowRight className='sign__fall-icon' />
            </Link>
          </div>
        </section>
      )}
    </>
  )
}

export default SignInForm
