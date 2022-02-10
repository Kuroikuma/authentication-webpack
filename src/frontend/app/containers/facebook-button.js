import React, { useContext } from 'react'
import Context from '../context/theme.context'
import logoWhite from '../.././../assets/facebook-white.png'
import logoDark from '../.././../assets/facebook-dark.png'
import { ButtonFacebookView } from '../components/facebook-button'

export const ButtonFacebook = () => {
  const { theme } = useContext(Context)

  const responseFacebook = (response) => {
    console.log(response)
  }
  return (
    <ButtonFacebookView
      responseFacebook={responseFacebook}
      logoWhite={logoWhite}
      logoDark={logoDark}
      theme={theme}
    />
  )
}
