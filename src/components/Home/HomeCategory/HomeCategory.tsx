import React, { useContext } from 'react'
import './homecategory.sass'
import { Link } from 'react-router-dom'
import categories from './data'
import { UserContext } from '../../../context/UserContext'

const Category = (): JSX.Element => {
  const { user } = useContext(UserContext)

  return (
    <section className='cat'>
      <h1 className='cat__title'>
        {user?.displayName} Nudimo Vam sledece kategorije
      </h1>
      <p className='cat__desc'>
        Trazite idealan poklon?
        <Link to='/products' className='cat__desc-link'>
          Istrazite poklone
        </Link>
      </p>
      <div className='cat__container'>
        {categories.map((category: any, i: any) => (
          <div key={i} className='cat__card'>
            <p className='cat__card-title'>{category.name}</p>
            <p className='cat__card-desc'>{category.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Category
