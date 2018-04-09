import { model, CREATE_ERROR, CREATE_REQUEST, CREATE_RESPONSE, UPDATE, RESTORE } from '../actions/order';
/* eslint-disable no-case-declarations */

const defaultState = {
  phoneNumber: '',
  address: '',
  note: '',
  deliveryType: '',
  fetching: false
};

const order = (state = defaultState, action) => {
  switch (action.type) {
    case `${model}/${RESTORE}`:
      return action.items.slice();

    case `${model}/${UPDATE}`:
      if (action.value !== state[action.field]) {
        return { ...state, [action.field]: action.value };
      }
      return state;

    case `${model}/${CREATE_REQUEST}`:
      return { ...state, fetching: true };

    case `${model}/${CREATE_RESPONSE}`:
    case `${model}/${CREATE_ERROR}`:
      return { ...state, fetching: false };

    default:
      return state;
  }
};

export default order;
