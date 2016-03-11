import { Map } from 'immutable';

export const GET_CURRENT_ORDERS = 'GET_CURRENT_ORDERS';

export const getOrders = (orders) => ({
  type: GET_CURRENT_ORDERS,
  payload: orders,
});

export const currentOrdersReducer = (state, action) => action.payload;

export const getCurrentOrders = () => (dispatch, getState) => {
  const falcor = getState().falcor;
  falcor.get(['myorders', { from: 0, to: 3 }, [
    'id',
    'bgImgUrl',
    'price',
    'weight',
    'deadline',
    'pledge',
    'requests',
    'deliveryTime',
    'delivDateNoun',
    'serviceType',
    'description',
    'fromStreetAddress',
    'fromSecondaryAddress',
    'fromCity',
    'fromState',
    'fromStateAbbr',
    'fromCountry',
    'fromZipCode',
    'toStreetAddress',
    'toSecondaryAddress',
    'toCity',
    'toState',
    'toStateAbbr',
    'toCountry',
    'toZipCode',
    'driverRating',
    'driverRatingCount',
    'driverDriverImg',
    'driverContactPhone',
    'driverDriver',
  ]]).then((value) => {
    console.log(value.json.myorders);
    dispatch(getOrders(new Map(value.json.myorders)));
  });
};

export const actions = {
  getCurrentOrders,
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_CURRENT_ORDERS]: currentOrdersReducer,
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {};
export default function ordersReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
