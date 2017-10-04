import { combineReducers } from 'redux';
import GuessesReducer from './reducer_guesses';

const rootReducer = combineReducers({
  guesses: GuessesReducer,
});

export default rootReducer;
