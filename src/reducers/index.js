import { combineReducers } from 'redux';
import GuessesReducer from './reducer_guesses';
import Reducers from './reducer';

const rootReducer = combineReducers({
  guesses: Reducers,
});

export default rootReducer;
