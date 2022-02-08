import Context from '../context/theme.context'
import React, { useContext } from 'react'
import { LayoutView } from '../components/layout.view'

export const Layout = ({ children }) => {
  const { theme } = useContext(Context)

  return (
    <>
      <LayoutView theme={theme}>{children}</LayoutView>
    </>
  )
}
