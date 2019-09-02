import {
  call, fork, put, all, take,
} from 'redux-saga/effects';
import DTO from '../common/DTO';
import RestAPI from '../common/RestAPI';
import * as actions from '../actions/actions';

async function fetchPostApi(headers) {
  const api = {
    ...RestAPI.auth_desc.user_login,
    query: '',
    headers,
  };
  const res = await DTO(api);
  return res;
}

/** *************************************************************************** */
/** ***************************** WATCHERS ************************************ */
/** *************************************************************************** */

export function* fetchPosts() {
  console.log('Hello Sagas!');
  const { headers } = yield take(actions.HEADERS);
  const res = yield call(fetchPostApi, headers);
  yield put(actions.getUser(res));
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([fork(fetchPosts)]);
}
