import React, { useContext } from 'react'
import UserContext from '../app/context/user.context'
import { LoggetOut } from './LoggedOut.routes'
import { LoggedIn } from './LoggedIn.routes'

export const IndexRoutes = () => {
  const { isLoggedIn } = useContext(UserContext)

  return isLoggedIn ? <LoggedIn /> : <LoggetOut />
}
