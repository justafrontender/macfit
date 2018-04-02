import { model, CLOSE, CREATE } from '../actions/dialogs';

/*
параметры диалога:
type - тип окна
children - содержимое
closeButton - кнопка закрыть вверху
buttons - кнопки и обработчики
*/

const initialDialog = {
  type: 'modal',
  children: null,
  closeButton: true,
  buttons: []
};

const dialogs = (state = [], action) => {
  switch (action.type) {
    case `${model}/${CREATE}`:
      return [...state, { ...initialDialog, ...action.payload }];

    case `${model}/${CLOSE}`:
      return state.slice(0, -1);

    default:
      return state;
  }
};

export default dialogs;
