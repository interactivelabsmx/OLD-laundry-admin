import { get } from 'jquery';
import { post } from 'jquery';

export const GET_SPECS = 'GET_SPECS';
export const CREATE_SPEC = 'CREATE_SPEC';

export const getSpecsAction = (specs) => ({
  type: GET_SPECS,
  payload: specs,
});

export const createSpecAction = (spec) => ({
  type: CREATE_SPEC,
  payload: spec,
});

export const getSpecsReducer = (state, action) => action.payload;

export const createSpecReducer = (state, action) => {
  state.push(action.payload);
  return state;
};

export const getSpecs = () => (dispatch) => {
  get('/api/v1/getspecs', (data) => {
    dispatch(getSpecsAction(data.specs));
  });
};

export const createSpec = (values, dispatch) => new Promise(resolve => {
  post('/api/v1/createspec', values).done((data) => {
    console.log(data);
    dispatch(createSpecAction(values));
    resolve(values);
  });
});

export const actions = {
  getSpecsAction,
  createSpecAction,
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_SPECS]: getSpecsReducer,
  [CREATE_SPEC]: createSpecReducer,
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {};
export default function specsReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
