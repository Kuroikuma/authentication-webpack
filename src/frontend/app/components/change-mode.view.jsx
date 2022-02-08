import React from 'react'
import '../css/change-mode.css'

export const ChangeModeView = ({ theme, handleMode }) => {
  return (
    <div onClick={handleMode} className={`change ${theme}`}>
      <button></button>
    </div>
  )
}
