import React, { useContext, useState, useEffect } from 'react'
import UserContext from '../context/user.context'
import { LoggetOut } from './LoggedOut.routes'
import { LoggedIn } from './LoggedIn.routes'

export const IndexRoutes = () => {
  const { isLoggedIn } = useContext(UserContext)
  const [isLogget, setIsLogget] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLogget(isLoggedIn)
    }
  }, [isLoggedIn])

  return isLogget ? <LoggedIn /> : <LoggetOut />
}
