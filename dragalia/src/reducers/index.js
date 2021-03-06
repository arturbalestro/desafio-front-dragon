import actionTypes from '../actions/types';
import update from 'immutability-helper';

const reducer = (state, action) => {
  //Preventing lint error of state not previously declared
  if (typeof state === 'undefined') {
    return 0;
  }

  if (action.type === actionTypes.ADD_USER) {
    return { ...state, loading: true, newUser: action.newUser };
  } else if (action.type === actionTypes.USER_ADDED) {

    //Updating state without modifying the original object
    const updatedState = update(state.users, { $push: [action.addedUser] });

    return { ...state, users: updatedState, loading: false };
  } else if (action.type === actionTypes.ADD_USER_FAILED) {
    return { ...state, loading: false };
  }

  //Updating state with the actions
  if (action.type === actionTypes.GET_DRAGONS) {
    return { ...state, loading: true };
  } else if (action.type === actionTypes.DRAGONS_RECEIVED) {
    return { ...state, dragons: action.dragons, loading: false };
  } else if (action.type === actionTypes.GET_DRAGONS_FAILED) {
    return { ...state, loading: false };
  }

  if (action.type === actionTypes.ADD_DRAGON) {
    return { ...state, loading: true, newDragon: action.newDragon };
  } else if (action.type === actionTypes.DRAGON_ADDED) {

    //Updating state without modifying the original object
    const updatedState = update(state.dragons, { $push: [action.addedDragon] });

    return { ...state, dragons: updatedState, loading: false };
  } else if (action.type === actionTypes.ADD_DRAGON_FAILED) {
    return { ...state, loading: false };
  }

  if (action.type === actionTypes.EDIT_DRAGON) {
    return { ...state, loading: true, dragonId: action.dragonId, newDragon: action.newDragon };
  } else if (action.type === actionTypes.DRAGON_EDITED) {

    //Updating state without modifying the original object
    //Removing the old object to add the new one to the array
    const updatedDragons = state.dragons.filter(dragon => dragon.id !== action.dragonId);
    const setDragons = update(state.dragons, { $set: updatedDragons });
    const updatedState = update(setDragons, { $push: [action.editedDragon] });

    return { ...state, dragons: updatedState, loading: false };
  } else if (action.type === actionTypes.EDIT_DRAGON_FAILED) {
    return { ...state, loading: false };
  }

  if (action.type === actionTypes.DELETE_DRAGON) {
    return { ...state, loading: true, dragonId: action.dragonId };
  } else if (action.type === actionTypes.DRAGON_DELETED) {
    return { ...state, dragons: state.dragons.filter(dragon => dragon.id !== action.deletedDragon.id), loading: false };
  } else if (action.type === actionTypes.DELETE_DRAGON_FAILED) {
    return { ...state, loading: false };
  }

  return state;
};
export default reducer;
