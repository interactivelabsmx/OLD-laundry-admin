import { get, post, ajax } from 'jquery';

export const GET_SPECS = 'GET_SPECS';
export const CREATE_SPEC = 'CREATE_SPEC';
export const DELETE_SPEC = 'DELETE_SPEC';

export const getSpecsAction = (specs) => ({
  type: GET_SPECS,
  payload: specs,
});

export const createSpecAction = (spec) => ({
  type: CREATE_SPEC,
  payload: spec,
});

export const deleteSpecAction = (spec) => ({
  type: DELETE_SPEC,
  payload: spec,
});

export const getSpecsReducer = (specs, action) => action.payload;

export const createSpecReducer = (specs, action) => [...specs, action.payload];

export const deleteSpecReducer = (specs, action) =>
  specs.filter(spec => parseInt(spec.idSpecs, 0) !== parseInt(action.payload, 0));

export const getSpecs = () => (dispatch) => {
  get('/api/v1/getspecs', (data) => {
    dispatch(getSpecsAction(data.specs));
  });
};

export const deleteSpec = (id) => (dispatch) => {
  ajax({
    url: '/api/v1/getspecs',
    method: 'DELETE',
    data: { id },
  }).done(() => {
    dispatch(deleteSpecAction(id));
  });
};

export const createSpecForm = (values, dispatch) => new Promise(resolve => {
  post('/api/v1/createspec', values).done((data) => {
    dispatch(createSpecAction(data));
    resolve(data);
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
  [DELETE_SPEC]: deleteSpecReducer,
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {};
export default function specsReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
