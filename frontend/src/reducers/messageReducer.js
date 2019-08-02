const messageReducer = (state, action) => {
  switch(action.type) {
    case 'NEW':
      return state;
    case 'EDIT':
      return state;
    case 'DELETE':
      return state;
    default:
      return state;
  }
}

export default messageReducer;
