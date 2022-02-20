import '../css/layout.css'
import React from 'react'
import { Logo } from './logo'
import { ChangeMode } from '../containers/change-mode'
import { Avatar } from '../containers/avatar'

export const LayoutView = ({ theme, children }) => {
  return (
    <div className={`container ${theme}`}>
      <ChangeMode />

      <Logo />
      {children}
      <Avatar />
    </div>
  )
}
