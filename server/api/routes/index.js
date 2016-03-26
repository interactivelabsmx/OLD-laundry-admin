import Specs from '../controllers/specs';
import User from '../controllers/users';

module.exports = [
  { method: 'GET', path: '/api/v1/getuser/{id}', config: User.getUser },
  { method: 'POST', path: '/api/v1/createuser', config: User.createUser },
  { method: 'POST', path: '/api/v1/adduseraddress', config: User.addUserAddress },
  // Specs
  { method: 'GET', path: '/api/v1/getspecs', config: Specs.getSpecs },
  { method: 'POST', path: '/api/v1/createspec', config: Specs.createSpec },
  { method: 'DELETE', path: '/api/v1/deletespec', config: Specs.deleteSpec },
];
