import React from 'react'
import { AvatarOption } from './avatar-option'
import ArrowUpDark from '../../../assets/up-arrowDark.png'
import ArrowUpWhite from '../../../assets/up-arrowWhite.png'
import ArrowDownDark from '../../../assets/arrow-downDark.png'
import ArrowDownWhite from '../../../assets/arrow-downWhite.png'
import '../css/avatar.css'

export const AvatarView = (props) => {
  const {
    avatar,
    username,
    show,
    theme,
    isShowOptions,
    handleHover,
    handleLogout,
    hover,
  } = props
  return (
    <div className="AvatarContainer">
      <img src={avatar} alt="avatar" />
      <p>{username}</p>
      <div onClick={show} className="AvatarContainer--toogle">
        {theme === 'white' ? (
          <img src={isShowOptions ? ArrowUpDark : ArrowDownDark} alt="" />
        ) : (
          <img src={isShowOptions ? ArrowUpWhite : ArrowDownWhite} alt="" />
        )}
      </div>
      <AvatarOption
        isShowOptions={isShowOptions}
        theme={theme}
        handleHover={handleHover}
        handleLogout={handleLogout}
        hover={hover}
      />
    </div>
  )
}
