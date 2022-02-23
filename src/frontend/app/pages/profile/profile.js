import React, { useContext, useState, useEffect } from 'react'
import UserContext from '../../context/user.context'
import { useNavigate } from 'react-router-dom'
import { ProfileView } from './profile.view'

export const Profile = () => {
  const { user } = useContext(UserContext)
  const [User, setUser] = useState({})

  let navigate = useNavigate()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (user) {
        if (Object.keys(user).length) {
          setUser(user.user)
        }
      }
    }
  }, [user])

  const goEditProfile = () => {
    navigate('/edit_profile')
  }

  return <ProfileView User={User} goEditProfile={goEditProfile} />
}
