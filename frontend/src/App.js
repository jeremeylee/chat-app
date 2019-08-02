import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import ChatInput from './components/chatInput';
import messageHelper from './components/messages_helper';
import Messages from './components/messages';

const App = (props) => {
  const divRef = React.createRef(); //Used to ref the hidden <div> at the bottom of the message container and keep the chat box always scrolled down

  useEffect(() => {
    divRef.current.scrollIntoView();
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

export default connect(mapStateToProps)(App);
