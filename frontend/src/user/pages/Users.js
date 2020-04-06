import React from 'react';
import UsersList from '../components/UsersList';

function Users() {
  const USERS = [
    {
      id: 'u1',
      name: 'zero',
      image: 'https://i.pinimg.com/originals/16/a4/57/16a457c0105c223edc6b9a6d342b1eb6.png',
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
}

export default Users;
