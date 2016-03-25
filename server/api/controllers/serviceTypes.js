import Joi from 'joi';
import Boom from 'boom';
import {
  getServiceTypes,
  createServiceType,
} from '../../awsApi/awsServiceTypes';

module.exports = {
  getServiceTypes: {
    auth: 'session',
    handler(request, reply) {
      getServiceTypes()
        .then((result) => reply(result))
        .catch((err) => reply(new Boom(err)));
    },
  },
  createServiceType: {
    validate: {
      payload: {
        description: Joi.string().required(),
        name: Joi.string().required(),
        price: Joi.number().required(),
        time: Joi.number().integer().required(),
      },
    },
    auth: 'session',
    handler(request, reply) {
      createServiceType(request.payload)
        .then((result) => reply(result))
        .catch((err) => reply(new Boom(err)));
    },
  },
};
