import React from 'react';
import { Route, Router } from 'react-router';
import Home from '../../src/components/Home/home';
import Details from '../../src/components/Details/details';
import Login from '../../src/components/Login/login';


const rootView = (
  <Router>
    <Route path="/" component={ Home } />
    <Route path="/Details" component={ Details } />
    <Route path="/Login" component={ Login } />
    <Route status={404} path="*" component={ Home } />
   </Router>
);

export default rootView;
