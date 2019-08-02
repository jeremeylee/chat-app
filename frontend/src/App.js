import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import ChatInput from './components/chatInput';
import Message from './components/message';
import { messageAction } from './reducers/messageReducer';

import messageService from './services/messages';

const App = (props) => {
  const { messageAction, message} = props;

  const divRef = React.createRef(); //Used to ref the hidden <div> at the bottom of the message container and keep the chat box always scrolled down
  
  useEffect(() => {
    const fetchMessages = async () => {
      const savedMessages = await messageService.getMessages();
      messageAction('NEW', savedMessages);
    }
    fetchMessages();
  }, []);
  
  useEffect(() => {
    divRef.current.scrollIntoView();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  const showMessages = () => {
    if (message) {
      return (
      message.map(content => (
        <Message
        //implement key when IDs are implemented 
          username={content.username}
          message={content.message}
        />
      ))
      );
    }
  };

  return (
    <div>
      <div className='message-container'>
        {showMessages()}
        <div ref={divRef}></div>
      </div>
      <ChatInput />
    </div>
  );
}

const mapStateToProps = (state) => (
  {
    message: state.message,
  }
);

const mapDispatchToProps = (
  {
    messageAction,
  }
)
export default connect(mapStateToProps,mapDispatchToProps)(App);
