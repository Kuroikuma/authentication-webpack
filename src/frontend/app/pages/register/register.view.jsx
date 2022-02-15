import React from 'react'
import { Layout } from '../../containers/layout'
import { Textfield } from '../../containers/input'
import { Button } from '../../components/button'
import '../../css/register.css'

export const RegisterView = (props) => {
  const {
    elementRef,
    handleFile,
    handleClick,
    username,
    name,
    password,
    biography,
    email,
    handleChange,
    onPost,
  } = props
  return (
    <Layout>
      <div className="registerContainer">
        <h3>Register</h3>
        <Textfield
          name="username"
          value={username}
          handleChange={handleChange}
          size="sm"
          fullWidth
          type="text"
          placeholder="username"
        />
        <Textfield
          name="name"
          value={name}
          handleChange={handleChange}
          size="sm"
          fullWidth
          type="text"
          placeholder="name"
        />
        <Textfield
          name="email"
          value={email}
          handleChange={handleChange}
          size="sm"
          fullWidth
          type="text"
          placeholder="email"
        />
        <Textfield
          name="password"
          size="sm"
          handleChange={handleChange}
          value={password}
          fullWidth
          type="password"
          placeholder="password"
        />
        <Textfield
          name="biography"
          size="sm"
          value={biography}
          handleChange={handleChange}
          fullWidth
          type="text"
          placeholder="biography"
        />
        <Button
          onClick={handleClick}
          startIcon="photo"
          size="lg"
          variant="primary"
        >
          Upload
        </Button>
        <div className="inputFile">
          <input onChange={handleFile} type="file" ref={elementRef} />
        </div>
        <Button onClick={onPost} startIcon="send" variant="primary">
          Send
        </Button>
      </div>
    </Layout>
  )
}
