import { get, post } from './awsRequest';

module.exports = {
  getSpecs() {
    return new Promise((resolve, reject) => {
      get('spec', resolve, reject);
    });
  },
  createSpec(payload) {
    return new Promise((resolve, reject) => {
      post('spec', payload, resolve, reject);
    });
  },
};
