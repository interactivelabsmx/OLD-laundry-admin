
import { getSpecs } from '../../awsApi/awsSpecs';
import { getServiceTypes } from '../../awsApi/awsServiceTypes';

const getUser = (request) => new Promise((resolve) => {
  const user = request.auth.credentials.user;
  resolve(user);
});

const getState = (request) => new Promise((resolve) => {
  const state = {};
  getUser(request).then((user) => {
    state.user = user;
    return getSpecs();
  }).then((specs) => {
    state.specs = specs;
    return getServiceTypes();
  }).then((serviceTypes) => {
    state.serviceTypes = serviceTypes;
    resolve(state);
  });
});

module.exports = {
  getState,
  getUser,
};
