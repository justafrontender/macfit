import { createStore } from 'redux';
import reducer from '../reducers';

const addPromiseSupport = store => {
  const { dispatch } = store;

  store.dispatch = action => {
    if (action instanceof Promise) {
      return action.then(dispatch);
    }
    dispatch(action);
  };

  return store;
};

const store = createStore(reducer);

export default addPromiseSupport(store);
