import { get, post } from './awsRequest';

export default {
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
