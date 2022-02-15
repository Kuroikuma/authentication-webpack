import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginPageView } from './login.view'

export const LoginPage = () => {
  let navigate = useNavigate()
  const pushRegister = () => {
    navigate('/register')
  }
  return <LoginPageView pushRegister={pushRegister} />
}
