export const model = 'order';

export const UPDATE = 'UPDATE';

export const update = (field, value) => {
  return {
    type: `${model}/${UPDATE}`,
    field,
    value
  };
};
