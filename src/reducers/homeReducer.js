import detailsReducer from './reducer_details';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  details: detailsReducer
});


export default rootReducer;
