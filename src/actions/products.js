export const model = 'products';

export const GET = 'GET';

export const get = ({ data: { products } }) => {
  return {
    type: `${model}/${GET}`,
    payload: products
  };
};
