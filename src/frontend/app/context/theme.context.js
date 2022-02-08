import React, { useState, createContext } from 'react'

const Context = createContext({})

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('white')

  const darkMode = () => {
    setTheme('dark')
  }
  const lightMode = () => {
    setTheme('white')
  }

  const handleMode = () => {
    if (theme === 'dark') {
      lightMode()
    } else {
      darkMode()
    }
  }
  return (
    <Context.Provider value={{ theme, handleMode }}>
      {children}
    </Context.Provider>
  )
}

export default Context
