import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore} from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import messageReducer from './reducers/messageReducer';
import * as serviceWorker from './serviceWorker';

const reducer = combineReducers({
  message: messageReducer,
});

const store = createStore(reducer);
const render = () => {
  ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
  );
}

render();
store.subscribe(render);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
