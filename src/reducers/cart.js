import findIndex from 'lodash/findIndex';
import { ADD_ITEM, DELETE_ITEM, CHANGE_QUANTITY, CLEAR } from '../actions/cart';
/* eslint-disable no-case-declarations */

const reducer = (state = [], action) => {
  const itemKey = findIndex(state, item => item.productId === action.productId);
  const result = state.slice();

  switch (action.type) {
    case ADD_ITEM:
      // если такой товар уже есть в корзине
      // увеличить количество на 1
      if (itemKey === -1) {
        return [
          ...state,
          {
            productId: action.productId,
            quantity: action.amount
          }
        ];
      }

    // иначе добавить в корзину
    // eslint-disable-next-line no-fallthrough
    case CHANGE_QUANTITY:
      const quantity = result[itemKey].quantity + action.amount;
      result[itemKey].quantity = quantity < 1 ? 1 : quantity;
      return result;

    case DELETE_ITEM:
      // eslint-disable-next-line no-redeclare
      result.splice(itemKey, 1);
      return result;

    case CLEAR:
      return [];
  }
};

export default reducer;
