import {createStore, applyMiddleware} from 'redux';

import reducer from '../reducers/reducer';

export default createStore(reducer);
