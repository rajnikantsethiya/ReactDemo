import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import Home from '../src/components/Home/home';
// import Details from '../src/components/Details/details';

const store = configureStore(window.__initialState);

const rootView = (
      <Route path="/" component={ Home }>
        <IndexRoute component={ Home } />
        <Route status={404} path="*" component={ Home } />
      </Route>
);

ReactDOM.render(
    <Provider store={ store }>
     <Router history={browserHistory} routes={rootView} />
    </Provider>,
    document.getElementById('app')
);
