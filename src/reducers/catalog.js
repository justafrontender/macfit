import { model, GET } from '../actions/catalog';

const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case `${model}/${GET}`:
      return action.items.slice();

    default:
      return state;
  }
};
