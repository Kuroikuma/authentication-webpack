import React, { useContext } from 'react'
import Context from '../context/theme.context'
import logoWhite from '../.././../assets/google-white.png'
import logoDark from '../.././../assets/google-dark.png'
import { ButtonGoogleView } from '../components/google-button'

export const ButtonGoogle = () => {
  const { theme } = useContext(Context)

  const responseGoogle = (response) => {
    console.log(response)
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
