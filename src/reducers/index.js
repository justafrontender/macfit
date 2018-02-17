import { combineReducers } from 'redux';
import catalog from './catalog';
import catalogSections from './catalogSections';
import cart from './cart';
import order from './order';

export default combineReducers({ catalog, catalogSections, cart, order });
