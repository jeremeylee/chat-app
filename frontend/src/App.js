import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './App.css';
import ChatInput from './components/chatInput';
import Message from './components/message';
import { sendMessage, editMessage, deleteMessage } from './reducers/messageReducer';
import messageService from './services/messages';

const randomUser = () => {
  return Math.random() > 0.5 ? 'testUser1' : 'otherPerson2';
}

const App = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [chatText, setChatText] = useState('');
  const [currentID, setCurrentID] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  const { sendMessage, message} = props;

  const divRef = React.createRef(); //Used to ref the hidden <div> at the bottom of the message container and keep the chat box always scrolled down
  
  //Allows left clicking anywhere to close context menu
  useEffect(() => {
    
    window.addEventListener('click', () => setShowMenu(false));
    const fetchMessages = async () => {
      const savedMessages = await messageService.getMessages();
      sendMessage(savedMessages);
    }
    fetchMessages();
  }, []);
  
  useEffect(() => {
    divRef.current.scrollIntoView();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  // Needed to prevent double contextmenu caused by a second right click
  useEffect(() => {
    
      window.addEventListener('contextmenu', event => {
        event.preventDefault();
      })
    
  }, [showMenu]);

  const handleEdit = () => {
    setEditMode(true);
    const messageToEdit = message.filter(edit => edit.id === currentID).map(edit => edit.message);
    setChatText(messageToEdit);
  }

  const handleDelete = () => {
    console.log('delete');
    props.deleteMessage(currentID);
    messageService.deleteMessage(currentID);
  }

  const handleEnter = (event) => {
    event.preventDefault();
    if(editMode) {
      props.editMessage(event.target.value, currentUser, currentID);
      const editedMessage = {
        message: event.target.value,
        username: currentUser,
        id: currentID,
      };
      const response = messageService.updateMessage(editedMessage, currentID);
      setEditMode(false);
    } else {
      setChatText(event.target.value);
      const newMessage = {
        message: chatText,
        username: randomUser(),
        id: message.length + 1,
      };
      messageService.sendMessage(newMessage);
      sendMessage(newMessage);
    }
    setChatText('');
  }

  const handleContextMenu = (event, username, id) => {
    event.preventDefault();
    setShowMenu(true);
    setLeft(event.clientX)
    setTop(event.clientY)
    setCurrentID(id);
    setCurrentUser(username);
  }

  const menuStyle = {
    display: showMenu ? '' : 'none',
    position: 'absolute',
    left: `${left}px`,
    top: `${top}px`,

  }


  const showMessages = () => {
    if (message) {
      return (
      message.map(content => (
        <Message
          key={content.id}
          handleContextMenu={(event) => handleContextMenu(event, content.username, content.id)}
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
      <div style={menuStyle}>
        <ul>
          <li onClick={handleEdit}>Edit</li>
          <li onClick={handleDelete}>Delete</li>
        </ul>
      </div>
      <ChatInput
        chatText={chatText}
        setChatText={setChatText}
        handleEnter={handleEnter}
      />

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
    sendMessage,
    editMessage,
    deleteMessage,
  }
)
export default connect(mapStateToProps,mapDispatchToProps)(App);
