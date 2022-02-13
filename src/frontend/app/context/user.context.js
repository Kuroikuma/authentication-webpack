import React, { createContext, useReducer, useState } from 'react'
import { initialState, reducer } from '../../store/reducer'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(initialState)
  const [isLoading, setIsLoading] = useState(false)
  return (
    <AuthContext.Provider value={{ state, dispatch, isLoading, setIsLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
