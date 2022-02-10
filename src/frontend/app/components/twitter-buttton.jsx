import React, { useContext } from 'react'
import Context from '../context/theme.context'
import logoWhite from '../.././../assets/twitter-white.png'
import logoDark from '../.././../assets/twitter-dark.png'
import '../css/button-google.css'

export const ButtonTwitter = () => {
  const { theme } = useContext(Context)
  return (
    <button className="buttonGoogle">
      <img src={theme === 'white' ? logoDark : logoWhite} alt="google" />
    </button>
  )
}
