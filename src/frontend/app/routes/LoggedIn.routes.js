import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '../containers/layout'
import { Profile } from '../pages/profile/profile'
import { EditProfile } from '../pages/edit-profile/edit-profile'
export const LoggedIn = () => {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/layout" element={<Layout />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/edit_profile" element={<EditProfile />} />
      <Route path="/contact" element={<h1>Contact</h1>} />
      <Route
        path="*"
        element={
          <main style={{ padding: '1rem' }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  )
}
