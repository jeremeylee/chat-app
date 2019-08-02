import React from 'react';
import { Row } from 'antd';

const Messages = (props) => {
  return (
    <div>
      <Row>
        <strong>{props.username}</strong>
        <p>{props.message}</p>
      </Row>
    </div>
  )
}

export default Messages;
