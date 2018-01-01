import findIndex from 'lodash/findIndex';
import { model, LOAD, ADD_ITEM, DELETE_ITEM, CHANGE_QUANTITY, CLEAR } from '../actions/cart';
/* eslint-disable no-case-declarations */

const cart = (state = [], action) => {
  const itemKey = findIndex(state, item => item.productId === action.productId);
  const result = state.slice();

  switch (action.type) {
    case `${model}/${LOAD}`:
      return action.items.slice();

    case `${model}/${ADD_ITEM}`:
      // если товара нет в корзине
      // добавить в корзину
      if (itemKey === -1) {
        return [
          ...state,
          {
            productId: action.productId,
            quantity: action.amount
          }
        ];
      }

    // иначе увеличить количество на 1
    // eslint-disable-next-line no-fallthrough
    case `${model}/${CHANGE_QUANTITY}`:
      const quantity = result[itemKey].quantity + action.amount;
      result[itemKey].quantity = quantity < 1 ? 1 : quantity;
      return result;

    case `${model}/${DELETE_ITEM}`:
      result.splice(itemKey, 1);
      return result;

    case `${model}/${CLEAR}`:
      return [];
    default:
      return state;
  }
};

export default cart;
