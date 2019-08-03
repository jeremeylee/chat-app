import React from 'react';
import { Row } from 'antd';

const Messages = (props) => {

  return (
    <div>
      <Row onContextMenu={props.handleContextMenu}>
        <strong>{props.username}</strong>
        <div ><p>{props.message}</p></div>
      </Row>
    </div>
  )
}

export default Messages;
