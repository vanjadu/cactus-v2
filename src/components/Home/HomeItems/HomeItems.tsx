import React, { useState, useEffect } from 'react'
import './homeitems.sass'
import { toast } from 'react-toastify'
import { db } from '../../../firebase/firebase-config'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import SingleItem from '../../SingleItem'

const HomeItems = (): JSX.Element => {
  const [items, setItems] = useState<Array<any> | null>(null)

  useEffect(() => {
    const getItems = async () => {
      try {
        const shopItems = collection(db, 'items')

        const q = query(shopItems, orderBy('category', 'asc'))
        const querySnap = await getDocs(q)

        let menuItems = [] as any[]

        querySnap.forEach((doc: any) => {
          return menuItems.push({
            id: doc.id,
            data: doc.data(),
          })
        })

        setItems(menuItems)
      } catch (error: any) {
        console.log(error.message)
        toast.error('Proizvodi nisu učitani')
        setItems(null)
      }
    }

    getItems()
  }, [])

  console.log(items)

  let randomItems = [] as any[]

  if (items) {
    randomItems = items.sort(() => Math.random() - 0.5).slice(0, 4)
  }

  return (
    <>
      {items && (
        <section className='hitems'>
          <div className='hitems__container'>
            {randomItems?.map((item: any, i: any) => (
              <SingleItem key={i} identifier={item.id} {...item.data} />
            ))}
          </div>
        </section>
      )}
    </>
  )
}

export default HomeItems
