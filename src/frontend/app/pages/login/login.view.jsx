import React from 'react'
import '../../css/login.css'
import { Layout } from '../../containers/layout'
import { Textfield } from '../../containers/input'
import { ButtonGoogle } from '../../containers/google-button'
import { ButtonGitHub } from '../../containers/github-button'
import { ButtonFacebook } from '../../containers/facebook-button'
import { ButtonTwitter } from '../../components/twitter-buttton'

export const LoginPageView = ({ pushRegister }) => {
  return (
    <Layout>
      <div className="loginContainer">
        <div className="loginContainer__Top">
          <h3>Login</h3>
          <Textfield size="sm" fullWidth type="text" placeholder="email" />
          <Textfield
            size="sm"
            fullWidth
            type="password"
            placeholder="password"
          />
          <button>Login</button>
        </div>
        <div className="loginContainer__Botton">
          <p>or continue with these social profile</p>
          <div className="loginContainer__Botton__Logo">
            <div className="loginContainer__Botton__Logo__item">
              <ButtonGoogle />
            </div>
            <div className="loginContainer__Botton__Logo__item">
              <ButtonGitHub />
            </div>
            <div className="loginContainer__Botton__Logo__item">
              <ButtonFacebook />
            </div>
            <div className="loginContainer__Botton__Logo__item">
              <ButtonTwitter />
            </div>
          </div>
          <p>
            Don’t have an account yet?
            <span onClick={pushRegister}>Register</span>
          </p>
        </div>
      </div>
    </Layout>
  )
}
