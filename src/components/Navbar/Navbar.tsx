import React, { useContext } from 'react'
import './navbar.sass'
import { Link } from 'react-router-dom'
import logoImage from '../../assets/logo.png'
import { FiShoppingCart, FiUser, FiMenu, FiLogIn, FiX } from 'react-icons/fi'
import { UserContext } from '../../context/UserContext'
import { CartContext } from '../../context/CartContext'

interface NavbarProps {
  alterNav: boolean
  setAlterNav: (alterNav: boolean) => void
}

const Navbar = ({ alterNav, setAlterNav }: NavbarProps): JSX.Element => {
  const { user } = useContext(UserContext)

  const { cart } = useContext(CartContext)

  return (
    <header className='navbar'>
      <div className='navbar__left'>
        <Link to='/'>
          <img
            src={logoImage}
            alt='Cactus Gift Shop logo'
            className='navbar__logo'
          />
        </Link>
        <nav className='navbar__nav'>
          <Link to='/' className='navbar__link'>
            Naslovna
          </Link>
          <Link to='/products' className='navbar__link'>
            Asortiman
          </Link>
          <Link to='/about' className='navbar__link'>
            O nama
          </Link>
          <Link to='/contact' className='navbar__link'>
            Kontakt
          </Link>
          {user?.email === 'vanja@gmail.com' && (
            <Link to='/panel' className='navbar__link'>
              Panel
            </Link>
          )}
        </nav>
      </div>
      <div className='navbar__right'>
        <Link to='/cart' className='navbar__r-link'>
          <FiShoppingCart className='navbar__icon' /> Korpa
        </Link>
        {user ? (
          <Link
            to='/profile'
            className='navbar__r-link'
            style={{ textTransform: 'capitalize' }}
          >
            <FiUser className='navbar__icon' /> {user?.displayName}
          </Link>
        ) : (
          <Link to='/login' className='navbar__r-link'>
            <FiLogIn className='navbar__icon' /> Ulogujte se
          </Link>
        )}
        <div className='navbar__burger'>
          {alterNav ? (
            <FiX
              className='navbar__burger-icon'
              onClick={() => setAlterNav(!alterNav)}
            />
          ) : (
            <FiMenu
              className='navbar__burger-icon'
              onClick={() => setAlterNav(!alterNav)}
            />
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
