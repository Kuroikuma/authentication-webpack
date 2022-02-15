import React, { createContext, useState } from 'react'
import { useLogin } from '../hooks/useLogin'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const { isLoggedIn, user, Login, Logout } = useLogin()

  const [isLoading, setIsLoading] = useState(false)
  return (
    <UserContext.Provider
      value={{ isLoggedIn, user, Login, Logout, isLoading, setIsLoading }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
