import Joi from 'joi';
import Boom from 'boom';
import {
  getSpecs,
  createSpec,
} from '../../awsApi/awsSpecs';

module.exports = {
  getSpecs: {
    auth: 'session',
    handler(request, reply) {
      getSpecs()
        .then((result) => reply(result))
        .catch((err) => reply(new Boom(err)));
    },
  },
  createSpec: {
    validate: {
      payload: {
        description: Joi.string().required(),
        name: Joi.string().required(),
      },
    },
    auth: 'session',
    handler(request, reply) {
      createSpec(request.payload)
        .then((result) => reply(result))
        .catch((err) => reply(new Boom(err)));
    },
  },
};
