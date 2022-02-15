import '../css/button-google.css'
import React from 'react'

export const ButtonFacebookView = ({
  facebookLogin,
  logoDark,
  logoWhite,
  theme,
}) => {
  return (
    <button className="buttonGoogle" onClick={facebookLogin}>
      <img src={theme === 'white' ? logoWhite : logoDark} alt="facebook" />
    </button>
  )
}
