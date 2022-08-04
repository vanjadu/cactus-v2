import React from 'react'
import './homeus.sass'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import usImage from '../../../assets/about.jpg'

const WhyUs = (): JSX.Element => {
  return (
    <section className='us'>
      <div className='us__container'>
        <img src={usImage} alt='Cactus Gift Shop' className='us__back-image' />
        <div className='us__content'>
          <p className='us__cont-why'>Zasto mi?</p>
          <h1 className='us__cont-title'>
            Pokloni <br />
            za svaku priliku
          </h1>
          <p className='us__cont-desc'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
            vero!
          </p>
          <div className='us__cards'>
            <Link to='/about'>
              <div className='us__card'>
                <p className='us__card-title'>
                  Neki razlog <FiArrowRight />
                </p>
                <p className='us__card-desc'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam, libero.
                </p>
              </div>
            </Link>
            <Link to='/about'>
              <div className='us__card'>
                <p className='us__card-title'>
                  Neki razlog <FiArrowRight />
                </p>
                <p className='us__card-desc'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam, libero.
                </p>
              </div>
            </Link>
            <Link to='/about'>
              <div className='us__card'>
                <p className='us__card-title'>
                  Neki razlog <FiArrowRight />
                </p>
                <p className='us__card-desc'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam, libero.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
