import React from 'react'
import camera from '../../../../assets/camera.png'
import '../../css/edit-profile.css'
import { Layout } from '../../containers/layout'
import { Button } from '../../components/button'
import { Textfield } from '../../containers/input'
import { Title } from './title'
import { Photo } from './photo'

export const EditProfileView = (props) => {
  const {
    elementRef,
    handleFile,
    handleClick,
    name,
    phone,
    onPutUser,
    password,
    biography,
    username,
    handleChange,
    goProfile,
    User,
  } = props
  return (
    <Layout>
      <div className="edit-profile_container">
        <Button onClick={goProfile} variant="transparent">
          {'< Back'}
        </Button>
        <div className="edit-profile_container__content">
          <Title>
            <h2>Change Info</h2>
            <p>Changes will be reflected to every services</p>
          </Title>
          <Photo>
            <img src={User.avatar} alt="avatar" />
            <input
              onChange={handleFile}
              type="file"
              style={{ display: 'none' }}
              ref={elementRef}
            />
            <div
              onClick={handleClick}
              className="edit-profile_container__avatar"
            >
              <img src={camera} alt="camera" />
            </div>
            <p>CHANGE PHOTO</p>
          </Photo>
          <Textfield
            placeholder="Enter your name..."
            name="name"
            label="Name"
            value={name}
            onChange={handleChange}
            type="text"
            fullWidth
          />
          <Textfield
            placeholder="Enter your bio..."
            name="biography"
            value={biography}
            onChange={handleChange}
            label="Bio"
            type="text"
            fullWidth
          />
          <Textfield
            placeholder="Enter your phone..."
            name="phone"
            label="Phone"
            value={phone}
            onChange={handleChange}
            type="number"
            fullWidth
          />
          <Textfield
            placeholder="Enter your username..."
            name="username"
            label="Username"
            value={username}
            onChange={handleChange}
            type="text"
            fullWidth
          />
          <Textfield
            placeholder="Enter your new password..."
            name="password"
            label="Password"
            value={password}
            onChange={handleChange}
            type="password"
            fullWidth
          />
          <Button onClick={onPutUser} variant="primary">
            Save
          </Button>
        </div>
      </div>
    </Layout>
  )
}
