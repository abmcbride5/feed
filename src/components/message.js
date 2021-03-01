import React from 'react';
import PropTypes from 'prop-types';
import User from './user';
import '../css/message.css';

const Message = ({ user, body }) => (
  <div className="messageContainer">
    <User user={user} />
    <p>{body}</p>
  </div>
);

Message.propTypes = {
  user: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Message;
