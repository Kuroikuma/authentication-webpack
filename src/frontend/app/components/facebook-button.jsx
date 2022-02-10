import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import '../css/button-google.css'
import React from 'react'

export const ButtonFacebookView = ({
  responseFacebook,
  logoDark,
  logoWhite,
  theme,
}) => {
  return (
    <FacebookLogin
      appId="3065376023721867"
      autoLoad={false}
      callback={responseFacebook}
      render={(renderProps) => (
        <button className="buttonGoogle" onClick={renderProps.onClick}>
          <img src={theme === 'white' ? logoDark : logoWhite} alt="facebook" />
        </button>
      )}
    />
  )
}
