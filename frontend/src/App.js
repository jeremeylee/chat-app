import React, { useEffect } from 'react';
import './App.css';
import ChatInput from './components/chatInput';
import messageHelper from './components/messages_helper';
import Messages from './components/messages';

const App = (props) => {

  const showMessages = () => (
    messageHelper.map(message => (
      <Messages
      //implement key when IDs are implemented 
        username={message.username}
        message={message.message}
      />
    ))
  )

  return (
    <div>
      {showMessages()}
      <ChatInput />
    </div>
  );
}

export default App;
