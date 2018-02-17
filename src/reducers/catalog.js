import find from 'lodash/find';
import filter from 'lodash/filter';

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

export const getItemsFromSection = (match, catalog, catalogSections) => {
  if (match) {
    const section = find(catalogSections, ['code', match.params.sectionCode]);
    return section !== undefined ? filter(catalog, ['catalogSection', section.id]) : [];
  }
  return catalog;
};
