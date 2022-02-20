import React, { useState } from 'react'
import '../css/avatar.css'

export const AvatarOptionItem = ({ theme, logoWhite, logoDark, text }) => {
  const [hover, setHover] = useState(false)
  const handleHover = () => {
    setHover(!hover)
  }

  return (
    <div
      onMouseLeave={handleHover}
      onMouseEnter={handleHover}
      className={
        hover
          ? `AvatarContainer__options__item show`
          : `AvatarContainer__options__item`
      }
    >
      {hover ? (
        <img src={theme === 'white' ? logoDark : logoWhite} alt="logo" />
      ) : (
        <img src={theme === 'white' ? logoWhite : logoDark} alt="logo" />
      )}

      <p>{text}</p>
    </div>
  )
}
