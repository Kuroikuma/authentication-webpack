import React, { useContext } from 'react'
import Context from '../context/theme.context'
import logoWhite from '../.././../assets/github-logo-white.png'
import logoDark from '../.././../assets/github-logo-dark.png'
import { ButtonGitHubView } from '../components/github-button'

export const ButtonGitHub = () => {
  const { theme } = useContext(Context)
  return (
    <ButtonGitHubView logoWhite={logoWhite} logoDark={logoDark} theme={theme} />
  )
}
