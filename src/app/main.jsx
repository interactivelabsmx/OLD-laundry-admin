import falcor from 'falcor';
import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { useRouterHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import makeRoutes from './routes';
import Root from './containers/Root';
import configureStore from './redux/configureStore';

const model = new falcor.Model({
  source: new falcor.HttpDataSource('/model.json'),
});
const initialState = Object.assign({}, window.initialState, { falcor: model });
const store = configureStore(initialState);
const browserHistory = useRouterHistory(createBrowserHistory)({
  basename: (''),
});
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => state.router,
});

const routes = makeRoutes(store);

ReactDOM.render(
  <Root history={history} routes={routes} store={store} />,
  document.getElementById('container')
);
