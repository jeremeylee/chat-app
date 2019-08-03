import React from 'react';
import { Row } from 'antd';

const Messages = (props) => {

  const handleContextMenu = (event) => {
    event.preventDefault();

    props.setShowMenu(true);
    props.setLeft(event.clientX)
    props.setTop(event.clientY)
    console.log(event);
    
  }
/* 
  const menuStyle = {
    display: showMenu ? '' : 'none'
  }
   */
  return (
    <div>
      <Row>
        <strong>{props.username}</strong>
        <div onContextMenu={handleContextMenu}><p>{props.message}</p></div>
      </Row>
    </div>
  )
}

export default Messages;
