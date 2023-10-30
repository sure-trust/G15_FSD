// reducers/index.js
import { combineReducers } from 'redux';
import bookReducer from './bookReducer';

const rootReducer = combineReducers({
  book: bookReducer,
  // Add more reducers here if needed
});

export default rootReducer;
