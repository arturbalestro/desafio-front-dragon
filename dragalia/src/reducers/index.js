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

  return state;
};
export default reducer;
