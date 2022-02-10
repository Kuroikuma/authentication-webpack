import React from 'react'
import { useParams } from 'react-router-dom'

export const ProfileView = () => {
  let params = useParams()
  console.log(`user desde el perfil${params.user}`)
  return <>Este es el perfil id{params.user}</>
}
