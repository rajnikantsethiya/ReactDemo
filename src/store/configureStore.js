import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reduxReactRouter } from 'redux-router';
import routes from '../config/routes';
import { createHashHistory as createHistory } from 'history';
import homeReducer from '../reducers/homeReducer';

export default function configureStore(initialState) {
  const finalCreateStore = compose(
      applyMiddleware(
        thunk
      ),
      reduxReactRouter({
        routes,
        createHistory
      }),
  )(createStore);

  const store = finalCreateStore(homeReducer, initialState);

  return store;
}
