import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from '../context/theme.context'
import UserContext from '../context/user.context'
import logoWhite from '../.././../assets/facebook-white.png'
import logoDark from '../.././../assets/facebook-dark.png'
import { postUserAuth } from '../../services/user.services'
import { ButtonFacebookView } from '../components/facebook-button'

export const ButtonFacebook = () => {
  const { theme } = useContext(Context)
  const { Login } = useContext(UserContext)
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
    if (response.status === 'connected') {
      window.FB.api('/me?fields=id,name,email,picture', (userData) => {
        const userPost = {
          email: userData.email || '',
          username: 'avatar default',
          password: userData.id || '',
          avatar: userData.picture.data.url || '',
          name: userData.name || '',
          biography: '',
          phone: 0,
        }
        postUserAuth(userPost).then((response) =>
          response ? Login({ isLoggedIn: true, user: response }) : null
        )
          navigate(`/profile`)
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
