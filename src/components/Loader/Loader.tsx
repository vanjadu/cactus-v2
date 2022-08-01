import React from 'react'
import './loader.sass'
import { TailSpin } from 'react-loader-spinner'

interface Props {
  small?: boolean
}

const Loader = ({ small }: Props): JSX.Element => {
  return (
    <div className={small ? 'loader small' : 'loader'}>
      <TailSpin height='120' width='120' color='#FBFBFB' ariaLabel='loading' />
    </div>
  )
}

export default Loader
