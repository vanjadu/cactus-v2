import React, { useContext, useState } from 'react'
import './registerform.sass'
import { Link, useNavigate } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { toast } from 'react-toastify'
import { auth } from '../../../firebase/firebase-config'
import Loader from '../../Loader'
import { UserContext } from '../../../context/UserContext'
import logoImg from '../../../assets/logo.png'
import svgImg from '../../../assets/register.svg'

const SignUpForm = () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [pass, setPass] = useState<string>('')

  const { setUser, loading, setLoading } = useContext(UserContext)

  const navigate = useNavigate()

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    if (!email || !pass || !name) {
      toast.error('Popunite sva polja')
      setLoading(false)
      return
    }

    if (pass.length < 6) {
      toast.error('Lozinka mora imati minimalno 6 karaktera')
      setLoading(false)
      return
    }

    if (pass.length > 15) {
      toast.error('Lozinka mora imati maksimalno 20 karaktera')
      setLoading(false)
      return
    }

    if (!email.includes('@') || !email.includes('.')) {
      toast.error('Email adresa nije ispravna')
      setLoading(false)
      return
    }

    if (email && pass) {
      try {
        await createUserWithEmailAndPassword(auth, email, pass)
        const newUser = auth.currentUser

        if (newUser) {
          await updateProfile(newUser, { displayName: name })
        }

        setUser(newUser)
        localStorage.setItem('user', JSON.stringify(newUser))

        toast.success('Uspesno ste se registrovali')
        setLoading(false)
        navigate('/')
      } catch (error) {
        console.log(error)
        toast.error('Došlo je do greške')

        setLoading(false)
      }
    }
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className='reg'>
          <img src={svgImg} alt='sign in' className='reg__svg' />
          <div className='reg__container'>
            <img
              src={logoImg}
              alt='cactus gift shop logo'
              className='reg__logo'
            />
            <h1 className='reg__title'>Kreirajte nalog</h1>
            <form className='reg__form' onSubmit={submitHandler}>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Vase ime'
                className='reg__input'
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type='email'
                id='email'
                name='email'
                placeholder='Vas email'
                className='reg__input'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type='password'
                id='password'
                name='password'
                placeholder='Vasa lozinka'
                className='reg__input'
                required
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
              <button type='submit' className='reg__btn'>
                Kreirajte
              </button>
            </form>
            <Link to='/login' className='reg__fall'>
              Imate nalog? <FiArrowRight className='reg__fall-icon' />
            </Link>
          </div>
        </section>
      )}
    </>
  )
}

export default SignUpForm
