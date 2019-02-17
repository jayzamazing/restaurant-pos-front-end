import {MOVE_TABLE, REMOVE_TABLE} from '../constants';

export const setTablePosition = (tableNumber, tx, ty) => {
  return {
    type: MOVE_TABLE,
    position: {tx, ty},
    tableNumber: tableNumber
  }
}
export const removeTablePosition = (tx, ty) => {
  return {
    type: REMOVE_TABLE,
    position: {tx, ty}
  }
}
