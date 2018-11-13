import React from 'react';
import ReactDOM from 'react-dom';
// import configureStore from './store/store';
// import Root from './components/root';
import { login } from './util/session_api_util';


document.addEventListener('DOMContentLoaded', () => {
  // const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to LikeMe!</h1>, root);

  //TESTING:
  window.login = login;
});
