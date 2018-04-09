export const model = 'dialogs';

export const CLOSE = 'CLOSE';
export const CREATE = 'CREATE';

export const create = ({ type, children, closeButton }) => ({
  type: `${model}/${CREATE}`,
  payload: { type, children, closeButton }
});

export const close = () => ({ type: `${model}/${CLOSE}` });
