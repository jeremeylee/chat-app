import React, { useState } from 'react';
import { connect } from 'react-redux';
import { messageAction } from '../reducers/messageReducer';
import { Input  } from 'antd';



const ChatInput = (props) => {

  return (
    <Input.TextArea placeholder="Message" value={props.chatText} onChange={value => props.setChatText(value.target.value)} onPressEnter={props.handleEnter} autosize/>
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
