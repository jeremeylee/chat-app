import React, { useState } from 'react';
import { connect } from 'react-redux';
import { messageAction } from '../reducers/messageReducer';
import { Input  } from 'antd';

const randomUser = () => {
  return Math.random() > 0.5 ? 'testUser1' : 'otherPerson2';
}

const ChatInput = (props) => {
  const [message, setMessage] = useState('');

  const handleEnter = (event) => {
    event.preventDefault();
    setMessage(event.target.value);
    
    const newMessage = {
      message,
      username: randomUser(),
    };

    props.messageAction('NEW', newMessage);
    console.log(message);
    setMessage('');
  }

  return (
    <Input.TextArea placeholder="Message" value={message} onChange={value => setMessage(value.target.value)} onPressEnter={handleEnter} autosize/>
  );
}

const mapDispatchToProps = {
  messageAction,
}

export default connect(null, mapDispatchToProps)(ChatInput);
