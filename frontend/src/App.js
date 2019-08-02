import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import ChatInput from './components/chatInput';
import messageHelper from './components/messages_helper';
import Messages from './components/messages';

const App = (props) => {
  useEffect(() => {
    showMessages();
  }, [props.message]);

  const showMessages = () => (
    props.message.map(message => (
      <Messages
      //implement key when IDs are implemented 
        username={message.username}
        message={message.message}
      />
    ))
  )

  return (
    <div>
      <div className='message-container'>
        {showMessages()}
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

export default connect(mapStateToProps)(App);
