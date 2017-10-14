import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import StoreConfig from './store/configureStore';

import './reset.css';
import './index.css';

import Game from './components/game';
import Store from './components/store';

// const store = StoreConfig({
//   guesses: [],
// });


ReactDOM.render(
  <Provider store={Store}>
    <Game />
  </Provider>,
  document.getElementById('root'),
);
