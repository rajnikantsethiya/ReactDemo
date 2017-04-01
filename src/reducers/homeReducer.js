import detailsReducer from './reducer_details';
import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';

const rootReducer = combineReducers({
  router,
  details: detailsReducer
});


export default rootReducer;
