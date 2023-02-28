import React from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../../features/auth';

function Profile() {
  const { user } = useSelector(userSelector);
  console.log(user);
  return <div>profile - {user.username}</div>;
}

export default Profile;
