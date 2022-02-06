import './hola-mundo.css'
import React from 'react'
import image from '../../assets/image.jpeg'
import { GoogleLogin } from 'react-google-login'
import { HolaMundoView } from '../components/hola-mundo'

export const HolaMundo = () => {
  const responseGoogle = (response) => {
    console.log(response)
  }

  return (
    <HolaMundoView
      GoogleLogin={GoogleLogin}
      responseGoogle={responseGoogle}
      image={image}
    />
  )
}
