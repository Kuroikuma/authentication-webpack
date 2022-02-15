import React from 'react'
import { GoogleLogin } from 'react-google-login'
import '../css/button-google.css'

export const ButtonGoogleView = ({
  responseGoogle,
  logoDark,
  logoWhite,
  theme,
}) => {
  return (
    <GoogleLogin
      clientId="208716464272-jcatu0n6hreikd73fi0p97rol1kabe0i.apps.googleusercontent.com"
      render={(renderProps) => (
        <button
          className="buttonGoogle"
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <img src={theme === 'white' ? logoWhite : logoDark} alt="google" />
        </button>
      )}
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  )
}
