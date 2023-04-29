import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    // @ts-ignore
    setUsersList((prevUsersList) => [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ]);
  };

  return (
    <article>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </article>
  );
}

export default App;
