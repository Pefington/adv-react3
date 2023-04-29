import PropTypes from 'prop-types';
import React from 'react';

import Card from '../UI/Card';

const UsersList = ({ users }) => (
  <Card>
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.age} years old)
        </li>
      ))}
    </ul>
  </Card>
);

export default UsersList;

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape( {
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
    } ).isRequired,
  ).isRequired,
};
