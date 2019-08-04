import React from 'react';
import { Input  } from 'antd';



const ChatInput = (props) => {

  return (
    <Input placeholder="Message" value={props.chatText} onChange={value => props.setChatText(value.target.value)} onPressEnter={props.handleEnter} autosize/>
  );
}

export default ChatInput;
