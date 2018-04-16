//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';

// Testing:
import { login, signup, logout } from './actions/session_actions';
// import * as BenchActions from './actions/bench_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }


  // TESTING PURPOSES ->
  // window.signup = signup;
  // window.login = login;
  // window.logout = logout;
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.fetchBenches = BenchActions.fetchBenches;
  // <- TESTING PURPOSES

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
