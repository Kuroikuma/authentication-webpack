import React from 'react'
import { Layout } from '../../containers/layout'
import { ProfileCard } from '../../components/profile-card'
import { Button } from '../../components/button'
import '../../css/profile.css'

export const ProfileView = ({ User }) => {
  return (
    <Layout>
      <div className="profile_container">
        <div className="profile_container__title">
          <h2>Personal info</h2>
          <p>Basic info, like your name and photo</p>
        </div>
        <div className="profile_container__content">
          <div className="profile_container__content__item">
            <div className="profile_container__content__item__left">
              <Button variant="primary">Edit</Button>
            </div>
            <div className="profile_container__content__item__rigth">
              <h3>Profile</h3>
              <p>Some info may be visible to other people</p>
            </div>
          </div>
          <ProfileCard name="PHOTO" element={User.avatar} />
          <ProfileCard name="NAME" element={User.name} />
          <ProfileCard name="BIO" element={User.biography} />
          <ProfileCard name="PHONE" element={User.phone} />
          <ProfileCard name="PASSWORD" element="*********" />
        </div>
      </div>
    </Layout>
  )
}
