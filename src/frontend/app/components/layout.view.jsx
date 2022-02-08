import '../css/layout.css'
import React from 'react'
import { Logo } from './logo'
import { ChangeMode } from '../containers/change-mode'

export const LayoutView = ({ theme, children }) => {
  return (
    <div className={`container ${theme}`}>
      <ChangeMode /> <Logo /> {children}
    </div>
  )
}
