export const model = 'cart';

export const RESTORE = 'RESTORE';
export const ADD_ITEM = 'ADD_ITEM';
export const CHANGE_QUANTITY = 'CHANGE_QUANTITY';
export const DELETE_ITEM = 'DELETE_ITEM';
export const CLEAR = 'CLEAR';

export const restore = items => {
  return {
    type: `${model}/${RESTORE}`,
    items
  };
};

export const addItem = (productId, amount = 1) => {
  return {
    type: `${model}/${ADD_ITEM}`,
    productId,
    amount: parseInt(amount, 10)
  };
};

export const changeQuantity = (productId, amount = 0) => {
  return {
    type: `${model}/${CHANGE_QUANTITY}`,
    productId,
    amount: parseInt(amount, 10)
  };
};

export const deleteItem = productId => {
  return {
    type: `${model}/${DELETE_ITEM}`,
    productId
  };
};

export const clear = () => {
  return { type: CLEAR };
};
