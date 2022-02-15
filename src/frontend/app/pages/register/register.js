import React, { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterView } from './register.view'
import { useFileStorage } from '../../hooks/useFileStorage'
import { useRegister } from '../../hooks/useRegister'
import { postUser } from '../../../services/user.services'

export const Register = () => {
  let navigate = useNavigate()
  const elementRef = useRef(null)

  const [file, fileHandler] = useFileStorage()

  const {
    username,
    name,
    password,
    avatar,
    biography,
    phone,
    email,
    AddRegisterField,
    ClearRegisterField,
  } = useRegister()

  const handleChange = (event) => {
    const { name, value } = event.target
    AddRegisterField(name, value)
  }
  useEffect(() => {
    if (file) {
      AddRegisterField('avatar', file)
      console.log('register:' + file)
    }
  }, [file])

  const handleFile = (event) => {
    fileHandler(event.target.files[0])
  }

  const handleClick = () => {
    elementRef.current.click()
  }

  const onPost = () => {
    const user = { name, username, avatar, biography, password, email }
    console.log(user)
    postUser(user)
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
    ClearRegisterField()
    navigate('/')
  }

  return (
    <RegisterView
      username={username}
      name={name}
      password={password}
      avatar={avatar}
      biography={biography}
      phone={phone}
      email={email}
      elementRef={elementRef}
      handleChange={handleChange}
      handleFile={handleFile}
      handleClick={handleClick}
      onPost={onPost}
    />
  )
}
