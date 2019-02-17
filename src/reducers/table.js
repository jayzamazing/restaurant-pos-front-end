import {MOVE_TABLE, REMOVE_TABLE} from '../constants';

const initialRepositoryState = [[]]

const updateTable = (state, tableNumber, position) => {
  //make shallow copy of state array
  let tempState = state.slice();
  if (!tempState[position.tx]) {
    tempState[position.tx] = [];
  }
  if (!tempState[position.tx][position.ty]) {
    tempState[position.tx][position.ty] = [];
  }
  tempState[position.tx][position.ty] = {tableNumber: tableNumber};
  return tempState;
}
const removeTable = (state, position) => {
  if (!state[position.tx] && !state[position.tx][position.ty]) {
    return state;
  }
  //make shallow copy of state array
  let tempState = state.slice();
  tempState[position.tx][position.ty] = {};
  return tempState;
}

export default function reducer(state = initialRepositoryState, action) {
  const {position, tableNumber} = action;
  switch (action.type) {
    case MOVE_TABLE:
      return updateTable(state, tableNumber, position);
    case REMOVE_TABLE:
      return removeTable(state, position);
    default:
      return state
  }
}
