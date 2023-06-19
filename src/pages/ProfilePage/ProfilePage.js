import React from 'react';
import Header from '../../components/Header/Header'
import Profile from '../../components/Profile/Profile'

function ProfilePage({ onUpdate }) {
  return (
    <>
      <Header />
      <Profile onUpdate={onUpdate} />
    </>
  );
}

export default ProfilePage;