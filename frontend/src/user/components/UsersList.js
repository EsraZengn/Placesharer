import React from 'react';
import UserItem from './UserItem';
import Card from '../../shared/components/UIElements/Card';
import './UsersList.css';

function UsersList({ items }) {
  if (items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h1>No users found</h1>
        </Card>
      </div>
    );
  }
  return (
    <ul>
      {items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
}

export default UsersList;
