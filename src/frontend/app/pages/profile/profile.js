import React, { useContext, useState, useEffect } from 'react'
import UserContext from '../../context/user.context'
import { ProfileView } from './profile.view'

export const Profile = () => {
  const { user } = useContext(UserContext)
  const [User, setUser] = useState({})
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (user) {
        if (Object.keys(user).length) {
          setUser(user.user)
        }
      }
    }
  }, [user])
  return <ProfileView User={User} />
}
