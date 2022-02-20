import React from 'react'
import '../css/profile.css'

export const ProfileCard = ({ name, element }) => {
  return (
    <>
      <div className="profile_container__content__item2">
        <p>{name}</p>
        {name === 'PHOTO' ? (
          <img src={element} alt={element} />
        ) : (
          <p>{element}</p>
        )}
      </div>
    </>
  )
}
