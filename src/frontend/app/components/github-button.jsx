import React from 'react'
import '../css/button-github.css'

export const ButtonGitHubView = ({ logoWhite, logoDark, theme }) => {
  return (
    <button className="buttonGithub">
      <a
        className="linkGithub"
        href="https://github.com/login/oauth/authorize?client_id=5b0a416181b203e91d38"
      >
        <img src={theme === 'white' ? logoWhite : logoDark} alt="logo" />
      </a>
    </button>
  )
}
