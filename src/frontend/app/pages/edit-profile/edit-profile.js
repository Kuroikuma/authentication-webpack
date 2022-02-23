import React, { useContext, useState, useEffect, useRef } from 'react'
import UserContext from '../../context/user.context'
import { useNavigate } from 'react-router-dom'
import { EditProfileView } from './edit-profile.view'
import { useFileStorage } from '../../hooks/useFileStorage'
import { useRegister } from '../../hooks/useRegister'
import { putUser } from '../../../services/user.services'

export const EditProfile = () => {
  const { user, Login } = useContext(UserContext)
  const [User, setUser] = useState({})

  let navigate = useNavigate()

  const elementRef = useRef(null)

  const [file, fileHandler] = useFileStorage()

  const {
    name,
    password,
    avatar,
    biography,
    phone,
    username,
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

  const goProfile = () => {
    navigate('/profile')
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (user) {
        if (Object.keys(user).length) {
          setUser(user.user)
        }
      }
    }
  }, [user])

  const onPutUser = () => {
    let newUser = {
      name: name ? name : User.name,
      password: password ? password : User.password,
      avatar: avatar ? avatar : User.avatar,
      phone: phone ? phone : User.phone,
      biography: biography ? biography : User.biography,
      username: username ? username : User.username,
    }
    putUser(newUser, User.id).then((response) =>
      response
        ? response.error
          ? null
          : Login({
              isLoggedIn: true,
              user: { token: user.token, user: response },
            })
        : null
    )

    ClearRegisterField()
  }

  return (
    <EditProfileView
      name={name}
      onPutUser={onPutUser}
      password={password}
      avatar={avatar}
      biography={biography}
      phone={phone}
      username={username}
      elementRef={elementRef}
      handleChange={handleChange}
      handleFile={handleFile}
      handleClick={handleClick}
      User={User}
      goProfile={goProfile}
    />
  )
}
