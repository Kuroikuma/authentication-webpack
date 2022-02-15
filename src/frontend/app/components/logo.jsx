import React from 'react'
import { useNavigate } from 'react-router'
import '../css/logo.css'
export const Logo = () => {
  let navigate = useNavigate()
  const onHome = () => {
    navigate('/')
  }
  return (
    <div className="logo">
      <h2 onClick={onHome}>{'<Kuroikuma />'}</h2>
    </div>
  )
}
