import React from 'react';

import './Message.css';

const Message = (props) => {
  const {
    messages: { user, text },
    name,
  } = props;

  const trimmedName = name.trim().toLowerCase();

  return user === trimmedName ? (
    <div className='messageContainer justifyEnd'>
      <p className='sentText pr-10'>{trimmedName}</p>
      <div className='messageBox backgoundBlue'>
        <p className='messageText colorWhite'>{text}</p>
      </div>
    </div>
  ) : (
    <div className='messageContainer'>
      <div className='messageBox backgroundLight'>
        <p className='messageText colorDark'>{text}</p>
      </div>
      <p className='sentText pl-10'>{user}</p>
    </div>
  );
};

export default Message;
