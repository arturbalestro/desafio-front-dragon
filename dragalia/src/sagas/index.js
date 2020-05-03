import { put, takeLatest, all } from 'redux-saga/effects';
import actionTypes from '../actions/types';
import axios from "axios";

const apiURL = 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon';

//Generator function to fetch data from the API and send the result to the DRAGONS_RECEIVED action.
function* fetchDragons() {
  const dragons = yield fetch(apiURL).then(response => response.json());

  //when the data is received, return the action result;
  yield put({ type: actionTypes.DRAGONS_RECEIVED, dragons });
}

function* addDragon(action) {
  const addedDragon = yield axios.post(apiURL, action.newDragon).then(response => response.data);

  //when the data is received, return the action result;
  yield put({ type: actionTypes.DRAGON_ADDED, addedDragon });
}

function* editDragon(action) {
  const editedDragon = yield axios.put(apiURL + '/' + action.dragonId, action.newDragon).then(response => response.data);

  //when the data is received, return the action result;
  yield put({ type: actionTypes.DRAGON_EDITED, dragonId: action.dragonId, editedDragon });
}

function* deleteDragon(action) {
  const deletedDragon = yield axios.delete(apiURL + '/' + action.dragonId).then(response => response.data);

  //when the data is received, return the action result;
  yield put({ type: actionTypes.DRAGON_DELETED, deletedDragon });
}

//Generator function to wait for the GET_DRAGONS to finish before triggering the other action.
function* actionWatcher() {
  yield takeLatest(actionTypes.GET_DRAGONS, fetchDragons);
  yield takeLatest(actionTypes.ADD_DRAGON, addDragon);
  yield takeLatest(actionTypes.EDIT_DRAGON, editDragon);
  yield takeLatest(actionTypes.DELETE_DRAGON, deleteDragon);
}

//Return the root saga with the sequence of actions
//TODO define this as a specific saga to list the dragons, instead of being the root one
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
