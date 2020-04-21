import React, { useState, useEffect } from 'react';
import { useHttpClient } from '../../shared/hooks/http-hook';
import UsersList from '../components/UsersList';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

function Users() {
  const [users, setUsers] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const responseData = await sendRequest('http://localhost:5000/api/users');
        setUsers(responseData.users);
      } catch (error) {}
    };
    getUsers();
  }, [sendRequest]);

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {console.log(users)}
      {!isLoading && users && <UsersList items={users} />};
    </>
  );
}

export default Users;
