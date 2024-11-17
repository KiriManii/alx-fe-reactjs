// src/ProfilePage.jsx
import UserInfo from './UserInfo';
import { useContext } from 'react';
import UserContext from './UserContext';

function ProfilePage() {
  const userData = useContext(UserContext); // Get user data from context
  return <UserInfo userData={userData} />;
}

export default ProfilePage;
