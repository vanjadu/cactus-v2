import React from 'react'
import './errorpage.sass'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import errorImg from '../../assets/error.svg'

const ErrorPage = () => {
  return (
    <section className='error-page'>
      <div className='error-page__text'>
        <h1 className='error-page__title'>Sadrzaj nije dostupan</h1>
        <p className='error-page__desc'>
          Stranicu koju trazite nije moguce otvoriti.
        </p>
        <Link to='/' className='error-page__link'>
          Nazad na naslovnu <FiArrowRight className='error-page__link-icon' />
        </Link>
      </div>
      <img src={errorImg} alt='error slika' className='error-page__img' />
    </section>
  )
}

export default ErrorPage
