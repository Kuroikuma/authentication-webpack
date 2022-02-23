import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from '../context/theme.context'
import UserContext from '../context/user.context'
import logoWhite from '../.././../assets/github-logo-white.png'
import logoDark from '../.././../assets/github-logo-dark.png'
import { postUserAuth } from '../../services/user.services'
import { ButtonGitHubView } from '../components/github-button'

export const ButtonGitHub = () => {
  const { theme } = useContext(Context)
  let navigate = useNavigate()
  const { Login } = useContext(UserContext)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = window.location.href
      const hashCode = url.includes('?code=')
      if (hashCode) {
        const newUrl = url.split('?code=')
        const code = newUrl[1]
        fetch(`/auth-github/${code}`)
          .then((res) => res.json())
          .then((response) => {
            const userPost = {
              email: response.html_url || '',
              username: response.login || '',
              password: response.login || '',
              avatar: response.avatar_url || '',
              name: response.name || '',
              biography: response.bio || '',
              phone: 0,
            }
            postUserAuth(userPost).then((response) =>
              response ? Login({ isLoggedIn: true, user: response }) : null
            )
            navigate(`/`)
          })
          .catch((error) => {
            console.log(error)
          })
      }
      //   navigate(`/`)
    }
  }, [])

  return (
    <ButtonGitHubView logoWhite={logoWhite} logoDark={logoDark} theme={theme} />
  )
}
