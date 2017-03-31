import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import homeReducer from '../reducers/homeReducer';

export default function configureStore(initialState) {
  const finalCreateStore = compose(
      applyMiddleware(
        thunk
      ),
  )(createStore);

  const store = finalCreateStore(homeReducer, initialState);

  return store;
}
