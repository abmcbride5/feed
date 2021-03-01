import React from 'react';
import PropTypes from 'prop-types';
import { users } from '../data/feedData';

const User = ({ user }) => (
  <h2>
    {users[user].name}
  </h2>
);

User.propTypes = {
  user: PropTypes.string.isRequired,
};

export default User;
