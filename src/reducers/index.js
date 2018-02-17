import { combineReducers } from 'redux';
import find from 'lodash/find';
import filter from 'lodash/filter';
import catalog from './catalog';
import catalogSections from './catalogSections';
import cart from './cart';
import order from './order';

export default combineReducers({ catalog, catalogSections, cart, order });

export const getBasketTotals = (cartItems, catalogItems) => cartItems.reduce(
  (sum, item) => {
    const good = find(catalogItems, i => i.id === item.productId);
    sum.count += item.quantity;
    sum.price += good.price * item.quantity;
    return sum;
  },
  { count: 0, price: 0 }
);

// eslint-disable-next-line
export const getItemsFromSection = (match, catalogItems, catalogSections) => {
  if (match) {
    const section = find(catalogSections, ['code', match.params.sectionCode]);
    return section !== undefined ? filter(catalogItems, ['catalogSection', section.id]) : [];
  }
  return catalogItems;
};
