import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './App.css';
import ChatInput from './components/chatInput';
import Message from './components/message';
import { messageAction } from './reducers/messageReducer';

import messageService from './services/messages';

const App = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  const { messageAction, message} = props;

  const divRef = React.createRef(); //Used to ref the hidden <div> at the bottom of the message container and keep the chat box always scrolled down

  useEffect(() => {
    window.addEventListener('click', () => setShowMenu(false));
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

  useEffect(() => {
    // Needed to prevent double contextmenu caused by a second right click
      window.addEventListener('contextmenu', event => {
        event.preventDefault();
        console.log('hello');
      })
    
  }, [showMenu]);

  const handleEdit = () => {
    //console.log('edit');
  }

  const handleDelete = () => {
   // console.log('delete');
  }

  const menuStyle = {
    display: showMenu ? '' : 'none',
    position: 'absolute',
    left: `${left}px`,
    top: `${top}px`,
  }

  const handleContextMenu = (event, id) => {
    event.preventDefault();

    setShowMenu(true);
    setLeft(event.clientX)
    setTop(event.clientY)
    console.log(id);
    
  }

  const showMessages = () => {
    if (message) {
      return (
      message.map(content => (
        <Message
          key={content.id}
          handleContextMenu={(event) => handleContextMenu(event,content.id)}
          username={content.username}
          message={content.message}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          left={left}
          setLeft={setLeft}
          top={top}
          setTop={setTop}
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
      <div style={menuStyle}>
        <ul>
          <li>Edit</li>
          <li>Delete</li>
        </ul>
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
