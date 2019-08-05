import messageHelper from '../components/messages_helper';

const messageReducer = (state = null, action) => {
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
        //username: action.username,
        id: action.id,
      };
      return editedMessage.map(message => message.id === action.id ? newMessage : message);
    }
    case 'DELETE': {
      const deletedMessage = [...state];
      return deletedMessage.filter(message => message.id !== action.id);
    }
    default:
      return state;
  }
}

export const sendMessage = (data) => (
  {
    type: 'NEW',
    data,
  }
)

export const editMessage = (message, id) => (
  {
    type: 'EDIT',
    message,
    //username,
    id,
  }
)

export const deleteMessage = (id) => (
  {
    type: 'DELETE',
    id,
  }
)
export default messageReducer;
