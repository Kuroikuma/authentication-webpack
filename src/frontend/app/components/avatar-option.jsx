import React from 'react'
import logoUserWhite from '../../../assets/userWhite.png'
import logoGroupDark from '../../../assets/groupDark.png'
import logoGroupWhite from '../../../assets/groupWhite.png'
import logout from '../../../assets/logout.png'
import logoUserDark from '../../../assets/userDark.png'
import { AvatarOptionItem } from './avatar-option-item'
import '../css/avatar.css'

export const AvatarOption = (props) => {
  const { isShowOptions, theme, handleHover, handleLogout, hover } = props
  return (
    <div
      className={
        isShowOptions
          ? 'AvatarContainer__options AvatarContainer__options--show'
          : 'AvatarContainer__options'
      }
    >
      <AvatarOptionItem
        theme={theme}
        logoWhite={logoUserWhite}
        logoDark={logoUserDark}
        text="My Profile"
      />
      <AvatarOptionItem
        theme={theme}
        logoWhite={logoGroupWhite}
        logoDark={logoGroupDark}
        text="Group Chat"
      />
      <div
        onMouseLeave={handleHover}
        onMouseEnter={handleHover}
        onClick={handleLogout}
        className={
          hover
            ? `AvatarContainer__options__item show`
            : `AvatarContainer__options__item`
        }
      >
        <img src={logout} alt="logout" />
        <p>logout</p>
      </div>
    </div>
  )
}
