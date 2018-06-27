export const model = 'productGroups';

export const GET = 'GET';

export const get = items => {
  return {
    type: `${model}/${GET}`,
    items
  };
};
