import React, { useContext } from 'react'
import './profilehero.sass'
import { UserContext } from '../../../context/UserContext'
import svgImg from '../../../assets/hello.svg'

const ProfileHero = (): JSX.Element => {
  const { user } = useContext(UserContext)

  //date
  let date = new Date()
  // day
  let daysList = [
    'Nedelja',
    'Ponedeljak',
    'Utorak',
    'Sreda',
    'Četvrtak',
    'Petak',
    'Subota',
  ]
  let day = date.getDay()
  let dayName = daysList[day]
  //month
  let monthList = [
    'Januar',
    'Februar',
    'Mart',
    'April',
    'Maj',
    'Jun',
    'Jul',
    'Avgust',
    'Septembar',
    'Oktobar',
    'Novembar',
    'Decembar',
  ]
  let month = date.getMonth()
  let monthName = monthList[month]
  // serial day
  let serialDate = date.getDate()

  // Welcome text logic
  let hours = date.getHours()
  const welcomeMessage = () => {
    if (hours >= 0 && hours < 12) {
      return 'Dobro jutro'
    } else if (hours >= 12 && hours <= 18) {
      return 'Dobar dan'
    } else {
      return 'Dobro veče'
    }
  }

  return (
    <div className='profile-hero'>
      <div className='profile-hero__container'>
        <div className='profile-hero__text'>
          <p className='profile-hero__date'>
            {`${dayName}, ${monthName} ${serialDate}.`}
          </p>
          <h1 className='profile-hero__title'>
            {welcomeMessage()}, {user?.displayName}
          </h1>
        </div>
        <img src={svgImg} alt='zdravo' className='profile-hero__image' />
      </div>
    </div>
  )
}

export default ProfileHero
