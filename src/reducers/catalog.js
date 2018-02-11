import { model, GET } from '../actions/catalog';

const defaultState = [];

const order = (state = defaultState, action) => {
  switch (action.type) {
    case `${model}/${GET}`:
      return action.items.slice();

    default:
      return state;
  }
};

export default order;