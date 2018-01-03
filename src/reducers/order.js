import { model, UPDATE } from '../actions/order';
/* eslint-disable no-case-declarations */

const defaultState = {
  phoneNumber: '',
  address: '',
  note: '',
  deliveryType: ''
};

const order = (state = defaultState, action) => {
  switch (action.type) {
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
