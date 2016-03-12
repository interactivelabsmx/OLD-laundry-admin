import boom from 'boom';
import ViewData from '../helpers/ViewData';
import appRender from '../helpers/appRender';
import { getState } from '../helpers/stateCreator';

exports.index = {
  auth: 'session',
  handler(request, reply) {
    const state = getState(request);
    const baseData = ViewData.getBaseData();
    baseData.state = state;
    console.log(baseData);
    appRender(request.path, state).then((html) => {
      baseData.html = html;
      return reply.view('main', baseData);
    }).catch((error) => {
      console.log(error);
      return reply(boom(error));
    });
  },
};
