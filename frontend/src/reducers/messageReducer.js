import messageHelper from '../components/messages_helper';

const messageReducer = (state = null, action) => {
  switch(action.type) {
    case 'NEW': {
      if(state) {
        const newState = state.concat(action.data);
        console.log(newState);
        return newState;
      }
      return action.data;
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
