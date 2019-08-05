import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import './App.css';
import { Row } from 'antd';
import ChatInput from './components/chatInput';
import Message from './components/message';
import { sendMessage, editMessage, deleteMessage } from './reducers/messageReducer';
import messageService from './services/messages';

var socket;

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

  const { sendMessage, message } = props;

  const divRef = React.createRef(); //Used to ref the hidden <div> at the bottom of the message container and keep the chat box always scrolled down
  
  
  useEffect(() => {
    //Allows left clicking anywhere to close context menu
    window.addEventListener('click', () => setShowMenu(false));
    const fetchMessages = async () => {
      const savedMessages = await messageService.getMessages();
      sendMessage(savedMessages);
    }
    fetchMessages();
    socket = io('http://localhost:3001');
    socket.on('newMessage', data => sendMessage(data));
    socket.on('editMessage', data => props.editMessage(data.message, data.id));
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

  const handleDelete = async () => {
    props.deleteMessage(currentID);
    await messageService.deleteMessage(currentID);
  }

  const handleEnter = async (event) => {
    event.preventDefault();
    if(editMode) {
      //props.editMessage(event.target.value, currentUser, currentID);
      const editedMessage = {
        message: event.target.value,
        username: currentUser,
        id: currentID,
      };
      //await messageService.updateMessage(editedMessage, currentID);
      socket.emit('editMessage', editedMessage);
      setEditMode(false);
    } else {

      setChatText(event.target.value);
      const newMessage = {
        message: chatText,
        username: randomUser(),
      };
      //await messageService.sendMessage(newMessage);
      socket.emit('newMessage', newMessage);
    }
    setChatText('');
  }

  const handleContextMenu = (event, username, id) => {
    event.preventDefault();
    setShowMenu(true);
    setLeft(event.pageX)
    setTop(event.pageY)
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
      <Row type='flex' justify='center' className='header'><h1>Chat Application</h1></Row>
      <div className='chat-container'>
        <div className='message-container'>
          {showMessages()}
          <div ref={divRef}></div>
        </div>
        <div className='context-menu' style={menuStyle}>
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
