import { model, UPDATE, RESTORE } from '../actions/order';
/* eslint-disable no-case-declarations */

const defaultState = {
  phoneNumber: '',
  address: '',
  note: '',
  deliveryType: ''
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

    default:
      return state;
  }
};

export default order;
