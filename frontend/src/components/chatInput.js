import React from 'react';
import { Input, Row  } from 'antd';
import './chatInput.css'


const ChatInput = (props) => {

  return (
    
      <Input className="chat-input" placeholder="Message" value={props.chatText} onChange={value => props.setChatText(value.target.value)} onPressEnter={props.handleEnter} />
   
    
  );
}

export default ChatInput;
