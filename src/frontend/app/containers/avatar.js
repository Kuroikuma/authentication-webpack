import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../context/user.context'

import Context from '../context/theme.context'
import { AvatarView } from '../components/avatar.view'

export const Avatar = () => {
  const { theme } = useContext(Context)
  let navigate = useNavigate()
  const { isLoggedIn, user, Logout } = useContext(UserContext)

  const [isShowOptions, setIsShowOptions] = useState(false)

  const [width, setWidth] = useState(0)

  const [User, setUser] = useState({})

  const show = () => {
    setIsShowOptions(!isShowOptions)
  }

  const [hover, setHover] = useState(false)
  const handleHover = () => {
    setHover(!hover)
  }

  const handleLogout = () => {
    if (isShowOptions) {
      Logout()
      navigate('/')
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (isLoggedIn) {
        setUser(user.user)
      }
    }
  }, [isLoggedIn])

  const cambiarwidth = () => {
    if (window.innerWidth === 375) {
      setWidth(window.innerWidth)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', cambiarwidth)
    }
  }, [])

  return (
    isLoggedIn && (
      <AvatarView
        avatar={User.avatar}
        username={User.username}
        show={show}
        width={width}
        theme={theme}
        isShowOptions={isShowOptions}
        handleHover={handleHover}
        handleLogout={handleLogout}
        hover={hover}
      />
    )
  )
}
