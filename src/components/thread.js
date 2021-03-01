import React from 'react';
import PropTypes from 'prop-types';
import Message from './message';
import '../css/thread.css';

const Thread = ({ title, messages }) => (
  <div className="threadContainer">
    <h1 className="threadHeader">{title}</h1>
    {messages.map((message) => (<Message body={message.messageBody} user={message.author} />))}
  </div>
);

Thread.propTypes = {
  title: PropTypes.string.isRequired,
  messages: PropTypes.any.isRequired,
};

export default Thread;
