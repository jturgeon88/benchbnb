import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  
  // TESTING PURPOSES ->
  // window.signup = APIUtil.signup;
  // window.login = APIUtil.login;
  // window.logout = APIUtil.logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // <- TESTING PURPOSES

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
