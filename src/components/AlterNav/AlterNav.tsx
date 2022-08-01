import React from 'react'
import './alternav.sass'

interface AlterNavProps {
  alterNav: boolean
}

const AlterNav = ({ alterNav }: AlterNavProps) => {
  return (
    <div className={alterNav ? 'alter open' : 'alter'}>
      <h1>Alter nav</h1>
    </div>
  )
}

export default AlterNav
