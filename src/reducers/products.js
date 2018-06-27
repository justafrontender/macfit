import { model, GET } from '../actions/products';

const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case `${model}/${GET}`:
      return action.payload.slice();

    default:
      return state;
  }
};
