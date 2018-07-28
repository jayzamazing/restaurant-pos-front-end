import {MOVE_TABLE} from '../constants';

export const setTablePosition = (tx, ty) => {
  return {
    type: MOVE_TABLE,
    position: {tx, ty}
  }
}
