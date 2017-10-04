import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import StoreConfig from './store/configureStore';

import './reset.css';
import './index.css';

import Game from './components/game';

const store = StoreConfig({
  guesses: [],
});

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root'),
);
