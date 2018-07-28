import {MOVE_TABLE} from '../constants';

const initialRepositoryState = {position: {tx: 0, ty: 0}};

export default function reducer(state = initialRepositoryState, action) {
  const {position} = action;
  switch (action.type) {
    case MOVE_TABLE:
    return {
      ...state,
      position
    }
    default:
      return state
  }
}
