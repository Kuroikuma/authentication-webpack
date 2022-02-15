import React from 'react'
import '../../css/login.css'
import { Layout } from '../../containers/layout'
import { Textfield } from '../../containers/input'
import { ButtonGoogle } from '../../containers/google-button'
import { ButtonGitHub } from '../../containers/github-button'
import { ButtonFacebook } from '../../containers/facebook-button'
import { ButtonTwitter } from '../../components/twitter-buttton'

export const LoginPageView = ({
  pushRegister,
  password,
  email,
  handleChange,
  onLogin,
  isErrorEmail,
  isErrorPassword,
}) => {
  return (
    <Layout>
      <div className="loginContainer">
        <form onSubmit={onLogin} className="loginContainer__Top">
          <h3>Login</h3>
          <Textfield
            size="sm"
            value={email}
            name="email"
            onChange={handleChange}
            fullWidth
            type="text"
            error={isErrorEmail}
            placeholder="email"
          />
          <Textfield
            size="sm"
            fullWidth
            value={password}
            onChange={handleChange}
            name="password"
            type="password"
            error={isErrorPassword}
            placeholder="password"
          />
          <button>Login</button>
        </form>
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
