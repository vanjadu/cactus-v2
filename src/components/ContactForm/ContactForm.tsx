import React, { useState } from 'react'
import './contactform.sass'
import cactusLogo from '../../assets/logo.png'
import contactImg from '../../assets/contact.svg'

const ContatForm = (): JSX.Element => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  return (
    <div className='contact'>
      <img src={contactImg} alt='sign in' className='contact__svg' />
      <div className='contact__container'>
        <img
          src={cactusLogo}
          alt='cactus gift shop logo'
          className='contact__logo'
        />
        <h1 className='contact__title'>Kontaktirajte nas</h1>
        <form className='contact__form'>
          <input
            name='name'
            type='text'
            id='name'
            placeholder='Vase ime'
            className='contact__input'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            name='email'
            type='email'
            id='email'
            placeholder='Vas email'
            className='contact__input'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            name='phone'
            type='tel'
            id='phone'
            placeholder='Vas broj telefona'
            className='contact__input'
            required
          />
          <textarea
            name='message'
            id='message'
            placeholder='Vasa poruka'
            className='contact__area'
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type='submit' className='contact__btn'>
            Posaljite
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContatForm
