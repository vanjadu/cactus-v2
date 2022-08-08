import React from 'react'
import './loader.sass'
import { TailSpin } from 'react-loader-spinner'

interface Props {
  small?: boolean
}

const Loader = ({ small }: Props): JSX.Element => {
  return (
    <div className={small ? 'loader small' : 'loader'}>
      <TailSpin height='150' width='150' color='#94B49F' ariaLabel='loading' />
    </div>
  )
}

export default Loader
