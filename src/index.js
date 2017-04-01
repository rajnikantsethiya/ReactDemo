import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import routes from './config/routes.js';
import { ReduxRouter } from 'redux-react-router';
import configureStore from './store/configureStore';

const store = configureStore(window.__initialState);

const rootView = (
  <div>
    <ReduxRouter routes={ routes } />
  </div>
);

ReactDOM.render(
    <Provider store={ store }>
     { rootView }
    </Provider>,
    document.getElementById('app')
);
