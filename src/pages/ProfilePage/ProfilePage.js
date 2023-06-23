import React from 'react';
import Header from '../../components/Header/Header'
import Profile from '../../components/Profile/Profile'

function ProfilePage({ onUpdate, logOut, isLoading, loggedIn }) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <Profile onUpdate={onUpdate} logOut={logOut} isLoading={isLoading} />
    </>
  );
}

export default ProfilePage;