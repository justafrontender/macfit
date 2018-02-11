export const model = 'catalogSections';

export const GET = 'GET';

export const get = items => {
  return {
    type: `${model}/${GET}`,
    items
  };
};
