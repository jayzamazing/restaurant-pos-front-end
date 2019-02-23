import {MOVE_TABLE, REMOVE_TABLE} from '../constants';
/**
* set the initial repo state to use 2 dimensional array, may switch to
* single array in the future like what was done inside of the renderTableSection
* of tables.js
*/
const initialRepositoryState = [[]]
/**
* Funciton that deals with updating the position of an individual tables position.
* @param state - repository previous state
* @param tableNumber - table number associated with the table
* @param position - x and y position of the table
* @return state- updated state with new table
*/
const updateTable = (state, tableNumber, position) => {
  //make shallow copy of state array
  let tempState = state.slice();
  //check to see if an index in the array exists
  if (!tempState[position.tx]) {
    //create index in array to be an empty array
    tempState[position.tx] = [];
  }
  //check to see if the 2nd dimension of the array exists
  if (!tempState[position.tx][position.ty]) {
    //create index in array to equal an empty array
    tempState[position.tx][position.ty] = [];
  }
  //add table to the array
  tempState[position.tx][position.ty] = {tableNumber: tableNumber};
  //return the tempstate to update the state object
  return tempState;
}
/**
* Function that deals with removing a table from state.. This currently works like this because
* I am currently checking for a tableNumber to exist in the state.
* @param state - repository previous state
* @param position - x and y position of the table
* @return state - updated state removing table
*/
const removeTable = (state, position) => {
  // if the table position does not exist then return the current state
  if (!state[position.tx] && !state[position.tx][position.ty]) {
    return state;
  }
  //make shallow copy of state array
  let tempState = state.slice();
  //empty the object at this array position
  tempState[position.tx][position.ty] = {};
  //return the tempstate to update the state object
  return tempState;
}
/**
* Reducer dealing with keeping track of multiple table positions
* @param state - repository previous state
* @param action - action object that we are listening to and data associated with it
* @return state - updated state removing table
*/
export default function reducer(state = initialRepositoryState, action) {
  //pull out needed data from action
  const {position, tableNumber, type} = action;
  //switch based on the action type
  switch (type) {
    case MOVE_TABLE:
      return updateTable(state, tableNumber, position);
    case REMOVE_TABLE:
      return removeTable(state, position);
    default:
      return state;
  }
}
