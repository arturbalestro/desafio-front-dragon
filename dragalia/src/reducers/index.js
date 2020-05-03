import actionTypes from '../actions/types';

const reducer = (state, action) => {
  //Preventing lint error of state not previously declared
  if (typeof state === 'undefined') {
    return 0;
  }

  //Updating state with the actions
  if (action.type === actionTypes.GET_DRAGONS) {
    return { ...state, loading: true };
  } else if (action.type === actionTypes.DRAGONS_RECEIVED) {
    return { ...state, dragons: action.dragons, loading: false };
  }

  //TODO Fix add and edit reduce to match the actions
  if (action.type === actionTypes.ADD_DRAGON) {
    return { ...state, loading: true };
  } else if (action.type === actionTypes.DRAGON_ADDED) {
    return { ...state, dragons: action.dragons, loading: false };
  }

  if (action.type === actionTypes.EDIT_DRAGON) {
    return { ...state, loading: true, dragonId: action.id };
  } else if (action.type === actionTypes.DRAGON_EDITED) {
    return { ...state, dragons: action.editedDragon, loading: false };
  }

  if (action.type === actionTypes.DELETE_DRAGON) {
    return { ...state, loading: true, dragonId: action.id };
  } else if (action.type === actionTypes.DRAGON_DELETED) {
    return { ...state, dragons: state.dragons.filter(dragon => dragon.id !== action.deletedDragon.id), loading: false };
  }

  return state;
};
export default reducer;
