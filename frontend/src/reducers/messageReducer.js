import messageHelper from '../components/messages_helper';

const messageReducer = (state = null, action) => {
  console.log('action: ', action.type);
  switch(action.type) {
    case 'NEW': {
      if(state) {
        const newState = state.concat(action.data);
        return newState;
      }
      return action.data;
    }
    case 'EDIT': {
      const editedMessage = [...state];
      const newMessage = {
        message: action.message,
        username: action.username,
        id: action.id,
      };
      return editedMessage.map(message => message.id === action.id ? newMessage : message);
    }
    case 'DELETE':
      return state;
    default:
      return state;
  }
}

export const messageAction = (type, data) => (
  {
    type,
    data,
  }
)

export const editMessage = (message, username, id) => (
  {
    type: 'EDIT',
    message,
    username,
    id,
  }
)
export default messageReducer;
