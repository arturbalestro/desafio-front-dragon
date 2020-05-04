import actionTypes from '../actions/types';

//Exporting the actions to be used in the components
export const addUser = (newUser) => ({
  type: actionTypes.ADD_USER,
  newUser
});

export const getDragons = () => ({
  type: actionTypes.GET_DRAGONS,
});

export const addDragon = (newDragon) => ({
  type: actionTypes.ADD_DRAGON,
  newDragon
});

export const editDragon = (dragonId, newDragon) => ({
  type: actionTypes.EDIT_DRAGON,
  dragonId,
  newDragon
});

export const deleteDragon = (dragonId) => ({
  type: actionTypes.DELETE_DRAGON,
  dragonId
});
