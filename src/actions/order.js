export const model = 'order';

export const UPDATE = 'UPDATE';
export const RESTORE = 'RESTORE';

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
