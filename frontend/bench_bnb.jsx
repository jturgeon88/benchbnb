import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
// TESTING PURPOSES:
import * as APIUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  // TESTING PURPOSES ->
  // window.signup = APIUtil.signup;
  // window.login = APIUtil.login;
  // window.logout = APIUtil.logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // <- TESTING PURPOSES
  ReactDOM.render(<h1>Welcome to BenchBnB sucka</h1>, root);
});
