import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import serviceTypes from './reducers/serviceTypes';
import user from './reducers/user';
import specs from './reducers/specs';

export default combineReducers({
  // Boilerplate reducers
  form,
  router,
  // Custom reducers
  user,
  specs,
  serviceTypes,
});
