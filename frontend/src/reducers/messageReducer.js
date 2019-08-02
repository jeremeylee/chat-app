import messageHelper from '../components/messages_helper';

const messageReducer = (state = messageHelper, action) => {
  switch(action.type) {
    case 'NEW': {
      const newState = state.concat(action.data);
      console.log(newState);
      return newState;
    }
    case 'EDIT':
      return state;
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
export default messageReducer;
