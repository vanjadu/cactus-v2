import React from 'react'
import './footer.sass'
import { Link } from 'react-router-dom'
import { FiInstagram, FiFacebook } from 'react-icons/fi'
import logoImage from '../../assets/logo.png'

const Footer = (): JSX.Element => {
  return (
    <footer className='footer'>
      <div className='footer__col'>
        <Link to='/'>
          <img
            src={logoImage}
            alt='cactus giftshop logo'
            className='footer__logo'
          />
        </Link>
      </div>
      <div className='footer__col'>
        <p className='footer__col-title'>Korisni linkovi</p>
        <Link to='/'>
          <span className='footer__col-link'>Naslovna</span>
        </Link>
        <Link to='/products'>
          <span className='footer__col-link'>Pokloni</span>
        </Link>
        <Link to='/contact'>
          <span className='footer__col-link'>Kontakt</span>
        </Link>
        <Link to='/'>
          <span className='footer__col-link'>Sacuvano</span>
        </Link>
      </div>
      <div className='footer__col'>
        <p className='footer__col-title'>Posetite nas</p>
        <Link
          to='https://www.google.com/maps/place/Milo%C5%A1a+Obrenovi%C4%87a+16,+Obrenovac/@44.6511526,20.1933188,17z/data=!3m1!4b1!4m5!3m4!1s0x475a1467d50ccdef:0xda024bf055ec05f0!8m2!3d44.6511488!4d20.1955075'
          target='_blank'
          rel='noreferrer'
          className='footer__col-link'
        >
          Miloša Obrenovića 16,
          <br />
          Obrenovac
        </Link>
      </div>
      <div className='footer__col'>
        <p className='footer__col-title'>Pisite nam</p>
        <Link to='/'>
          <span className='footer__col-link'>contact@cactus.com</span>
        </Link>
        <Link to='/'>
          <span className='footer__col-link'>064 457 7600</span>
        </Link>
        <div className='footer__col-socials'>
          <Link to='/'>
            <FiFacebook className='footer__social' />
          </Link>
          <Link to='/'>
            <FiInstagram className='footer__social' />
          </Link>
        </div>
      </div>
      <div className='footer__down'>
        <p className='footer__down-text'>
          Cactus Giftshop &copy; 2022. | Sva prava zadrzana.
        </p>
        <p className='footer__down-text'>
          Powered by{' '}
          <a href='https://vanja.bixtep.com/' target='_blank' rel='noreferrer'>
            Vanja
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
