import actionTypes from '../actions/types';

//Exporting the actions to be used in the components
export const getDragons = () => ({
  type: actionTypes.GET_DRAGONS,
});

export const addDragon = () => ({
  type: actionTypes.ADD_DRAGON,
});

export const editDragon = (id) => ({
  type: actionTypes.EDIT_DRAGON,
  id
});

export const deleteDragon = (id) => ({
  type: actionTypes.DELETE_DRAGON,
  id
});
