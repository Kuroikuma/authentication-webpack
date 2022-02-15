import React, { useState, useContext } from 'react'
import UserContext from '../../context/user.context'
import { useNavigate } from 'react-router-dom'
import { LoginPageView } from './login.view'
import { LoginServices } from '../../../services/user.services'

export const LoginPage = () => {
  let navigate = useNavigate()
  const { Login } = useContext(UserContext)

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [isErrorEmail, setIsErrorEmail] = useState(false)
  const [isErrorPassword, setIsErrorPassword] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    if (name === 'password') {
      setPassword(value)
    } else {
      setEmail(value)
    }
  }

  const onLogin = (event) => {
    event.preventDefault()

    password ? setIsErrorPassword(false) : setIsErrorPassword(true)

    email ? setIsErrorEmail(false) : setIsErrorEmail(true)

    if (password && email) {
      const user = {
        password,
        email,
      }

      LoginServices(user).then((response) =>
        response ? Login({ isLoggedIn: true, user: response }) : null
      )
      navigate('/profile')
    }
  }

  const pushRegister = () => {
    navigate('/register')
  }
  return (
    <LoginPageView
      handleChange={handleChange}
      pushRegister={pushRegister}
      password={password}
      email={email}
      onLogin={onLogin}
      isErrorPassword={isErrorPassword}
      isErrorEmail={isErrorEmail}
    />
  )
}
