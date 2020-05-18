import React from 'react';
import Message from '../Message/Message';

import ScrollToBottom from 'react-scroll-to-bottom';

import './Messages.css';
export const Messages = (props) => {
  const { messages, name } = props;
  return (
    <ScrollToBottom className='messages'>
      {messages.map((message, i) => (
        <Message key={i} message={message} name={name} />
      ))}
    </ScrollToBottom>
  );
};
