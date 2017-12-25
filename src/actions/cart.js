export const ADD_ITEM = 'ADD_ITEM';
export const CHANGE_QUANTITY = 'CHANGE_QUANTITY';
export const DELETE_ITEM = 'DELETE_ITEM';
export const CLEAR = 'CLEAR';

export const addItem = (productId, amount = 1) => {
  return {
    type: ADD_ITEM,
    productId,
    amount: parseInt(amount, 10)
  };
};

export const changeQuantity = (productId, amount = 0) => {
  return {
    type: CHANGE_QUANTITY,
    productId,
    amount: parseInt(amount, 10)
  };
};

export const deleteItem = productId => {
  return {
    type: DELETE_ITEM,
    productId
  };
};

export const clear = () => {
  return { type: CLEAR };
};
