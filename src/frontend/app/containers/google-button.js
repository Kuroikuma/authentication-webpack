import React, { useContext } from 'react'
import Context from '../context/theme.context'
import UserContext from '../context/user.context'
import { useNavigate } from 'react-router-dom'
import logoWhite from '../.././../assets/google-white.png'
import logoDark from '../.././../assets/google-dark.png'
import { ButtonGoogleView } from '../components/google-button'
import { postUserAuth } from '../../services/user.services'

export const ButtonGoogle = () => {
  let navigate = useNavigate()
  const { theme } = useContext(Context)
  const { Login } = useContext(UserContext)

  const responseGoogle = (response) => {
    const user = response.profileObj
    const userPost = {
      email: user.email || '',
      username: user.givenName || '',
      password: user.googleId || '',
      avatar: user.imageUrl || '',
      name: user.name || '',
      biography: '',
      phone: 0,
    }
    postUserAuth(userPost).then((response) =>
      response ? Login({ isLoggedIn: true, user: response }) : null
    )

    navigate(`/profile`)
  }

  return (
    <ButtonGoogleView
      responseGoogle={responseGoogle}
      logoWhite={logoWhite}
      logoDark={logoDark}
      theme={theme}
    />
  )
}
