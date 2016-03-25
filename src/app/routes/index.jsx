import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout from '../layouts/CoreLayout/CoreLayout';
import HomeView from '../views/HomeView';

export default () => (
  <Route path="/main" component={ CoreLayout } >
    <IndexRoute component={ HomeView } />
  </Route>
);
