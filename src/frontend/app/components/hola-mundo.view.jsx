import style from '../css/hola-mundo.module.css'
import React from 'react'

export const HolaMundoView = ({ image, GoogleLogin, responseGoogle }) => {
  return (
    <div className={style.container}>
      <h1>Hola mundo</h1>
      <img src={image} alt="que a pashao" />
      <br /> <br />
      <GoogleLogin
        clientId="208716464272-jcatu0n6hreikd73fi0p97rol1kabe0i.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}
