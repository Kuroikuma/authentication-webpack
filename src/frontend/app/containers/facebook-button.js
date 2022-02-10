import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from '../context/theme.context'
import logoWhite from '../.././../assets/facebook-white.png'
import logoDark from '../.././../assets/facebook-dark.png'
import { ButtonFacebookView } from '../components/facebook-button'

export const ButtonFacebook = () => {
  const { theme } = useContext(Context)
  let navigate = useNavigate()

  const facebookLogin = () => {
    if (!window.FB) return
    window.FB.getLoginStatus((response) => {
      if (response.status === 'connected') {
        facebookLoginHandler(response)
      } else {
        window.FB.login(facebookLoginHandler, { scope: 'public_profile,email' })
      }
    })
  }
  const facebookLoginHandler = (response) => {
    console.log(response)
    if (response.status === 'connected') {
      window.FB.api('/me?fields=id,name,email,picture', (userData) => {
        const user = userData.id
        navigate(`/profile/${user}`)
      })
    }
  }
  return (
    <ButtonFacebookView
      facebookLogin={facebookLogin}
      logoWhite={logoWhite}
      logoDark={logoDark}
      theme={theme}
    />
  )
}
