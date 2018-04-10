//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';

import { login, signup, logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  // TESTING PURPOSES ->
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // <- TESTING PURPOSES

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
