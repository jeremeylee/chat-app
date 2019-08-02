import React, { useState } from 'react';
import { Input  } from 'antd';
const ChatInput = (props) => {
  const [message, setMessage] = useState('');

  const handleEnter = (event) => {
    event.preventDefault();
    setMessage(event.target.value);
    console.log(message);
    setMessage('');
  }

  return (
    <Input.TextArea placeholder="Message" value={message} onChange={value => setMessage(value.target.value)} onPressEnter={handleEnter} autosize/>
  );
}

export default ChatInput;
