import serverApi from '../server/orders';

export const model = 'order';

export const UPDATE = 'UPDATE';
export const RESTORE = 'RESTORE';
export const CREATE_REQUEST = 'CREATE_REQUEST';
export const CREATE_RESPONSE = 'CREATE_RESPONSE';

export const restore = items => {
  return {
    type: `${model}/${RESTORE}`,
    items
  };
};

export const update = (field, value) => {
  return {
    type: `${model}/${UPDATE}`,
    field,
    value
  };
};

export const create = () => (dispatch, getState) => {
  dispatch({ type: `${model}/${CREATE_REQUEST}` });
  const { cart, order } = getState();
  serverApi.create({ cart, order })
    .then(response => dispatch({ type: `${model}/${CREATE_RESPONSE}`, response }));
};
