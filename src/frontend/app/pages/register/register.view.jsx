import React from 'react'
import { Layout } from '../../containers/layout'
import { Textfield } from '../../containers/input'
import { Button } from '../../components/button'
import '../../css/register.css'

export const RegisterView = () => {
  return (
    <Layout>
      <div className="registerContainer">
        <h3>Register</h3>
        <Textfield
          name="username"
          size="sm"
          fullWidth
          type="text"
          placeholder="username"
        />
        <Textfield
          name="name"
          size="sm"
          fullWidth
          type="text"
          placeholder="name"
        />
        <Textfield
          name="email"
          size="sm"
          fullWidth
          type="text"
          placeholder="email"
        />
        <Textfield
          name="password"
          size="sm"
          fullWidth
          type="password"
          placeholder="password"
        />
        <Textfield
          name="biography"
          size="sm"
          fullWidth
          type="text"
          placeholder="biography"
        />
        <Textfield
          name="avatar"
          size="sm"
          fullWidth
          type="text"
          placeholder="avatar"
        />
        <Button startIcon="send" variant="primary">
          Send
        </Button>
      </div>
    </Layout>
  )
}
