import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  let preLoadedState = {};
  // Possible current_user check here...
  const root_elmt = document.getElementById('root');
  const store = configureStore(preLoadedState);
  ReactDOM.render(<Root store={store}></Root>, root_elmt)
});
