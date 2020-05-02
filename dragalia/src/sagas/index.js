import { put, takeLatest, all } from 'redux-saga/effects';
import actionTypes from '../actions/types';

//Generator function to fetch data from the API and send the result to the DRAGONS_RECEIVED action.
function* fetchDragons() {
  const dragons = yield fetch(
    'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon'
  ).then(response => response.json());

  //when the data is received, return the action result;
  yield put({ type: actionTypes.DRAGONS_RECEIVED, dragons });
}

//Generator function to wait for the GET_DRAGONS to finish before triggering the other action.
function* actionWatcher() {
  yield takeLatest(actionTypes.GET_DRAGONS, fetchDragons);
}

//Return the root saga with the sequence of actions
//TODO define this as a specific saga to list the dragons, instead of being the root one
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
