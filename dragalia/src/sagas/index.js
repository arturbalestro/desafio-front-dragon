import { put, takeLatest, all } from 'redux-saga/effects';
import actionTypes from '../actions/types';
import axios from "axios";

const dragonsAPI = 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon';
const usersAPI = 'https://dragalia-59d52.firebaseio.com/users';

function* addUser(action) {
  try {
    const addedUser = yield axios.post(usersAPI, action.newUser).then(response => response.data);

    //when the data is received, return the action result;
    yield put({ type: actionTypes.USER_ADDED, addedUser });
  }
  catch (error) {
    yield put({ type: actionTypes.ADD_USER_FAILED, error });
  }
}

//Generator function to fetch data from the API and send the result to the DRAGONS_RECEIVED action.
function* fetchDragons() {
  try {
    const dragons = yield fetch(dragonsAPI).then(response => response.json());

    //when the data is received, return the action result;
    yield put({ type: actionTypes.DRAGONS_RECEIVED, dragons });
  }
  catch (error) {
    yield put({ type: actionTypes.GET_DRAGONS_FAILED, error });
  }
}

function* addDragon(action) {
  try {
    const addedDragon = yield axios.post(dragonsAPI, action.newDragon).then(response => response.data);

    //when the data is received, return the action result;
    yield put({ type: actionTypes.DRAGON_ADDED, addedDragon });
  }
  catch (error) {
    yield put({ type: actionTypes.ADD_DRAGON_FAILED, error });
  }
}

function* editDragon(action) {
  try {
    const editedDragon = yield axios.put(dragonsAPI + '/' + action.dragonId, action.newDragon).then(response => response.data);

    //when the data is received, return the action result;
    yield put({ type: actionTypes.DRAGON_EDITED, dragonId: action.dragonId, editedDragon });
  }
  catch (error) {
    yield put({ type: actionTypes.EDIT_DRAGON_FAILED, error });
  }
}

function* deleteDragon(action) {
  try {
    const deletedDragon = yield axios.delete(dragonsAPI + '/' + action.dragonId).then(response => response.data);

    //when the data is received, return the action result;
    yield put({ type: actionTypes.DRAGON_DELETED, deletedDragon });
  }
  catch (error) {
    yield put({ type: actionTypes.DELETE_DRAGON_FAILED, error });
  }
}

//Generator function to wait for the GET_DRAGONS to finish before triggering the other action.
function* actionWatcher() {
  yield takeLatest(actionTypes.ADD_USER, addUser);
  yield takeLatest(actionTypes.GET_DRAGONS, fetchDragons);
  yield takeLatest(actionTypes.ADD_DRAGON, addDragon);
  yield takeLatest(actionTypes.EDIT_DRAGON, editDragon);
  yield takeLatest(actionTypes.DELETE_DRAGON, deleteDragon);
}

//Return the root saga with the sequence of actions
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
