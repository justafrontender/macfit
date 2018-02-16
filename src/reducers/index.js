import { combineReducers } from 'redux';
import find from 'lodash/find';
import cart from './cart';
import order from './order';

export default combineReducers({ cart, order });

export const getBasketTotals = (cartItems, catalogItems) => cartItems.reduce(
  (sum, item) => {
    const good = find(catalogItems, i => i.id === item.productId);
    sum.count += item.quantity;
    sum.price += good.price * item.quantity;
    return sum;
  },
  { count: 0, price: 0 }
);
