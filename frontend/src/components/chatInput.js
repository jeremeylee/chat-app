import React, { useState } from 'react';
import { connect } from 'react-redux';
import { messageAction } from '../reducers/messageReducer';
import messageService from '../services/messages';
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
      id: props.message.length + 1,
    };
    const returnedMessage = messageService.sendMessage(newMessage);
    props.messageAction('NEW', newMessage);
    console.log(returnedMessage);
    setMessage('');
  }

  return (
    <Input.TextArea placeholder="Message" value={message} onChange={value => setMessage(value.target.value)} onPressEnter={handleEnter} autosize/>
  );
}

const mapStateToProps = state => (
  {
    message: state.message,
  }
)
const mapDispatchToProps = {
  messageAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatInput);
