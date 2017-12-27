import { model, UPDATE } from '../actions/order';
/* eslint-disable no-case-declarations */

const defaultState = {
  phone: '',
  name: '',
  address: ''
};

const order = (state = defaultState, action) => {
  switch (action.type) {
    case `${model}/${UPDATE}`:
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

export default order;
