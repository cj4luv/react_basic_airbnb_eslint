import {
  call, fork, put, all, take, select,
} from 'redux-saga/effects';
import endpoints from '../services/endpoints';
import * as actions from '../actions/actions';
import api from '../services';
import { getUser } from '../reducers/selectors';

const { user } = actions;

/** *************************** Subroutines *********************************** */

function* fetchEntity(entity, apiFn, apiInit) {
  yield put(entity.request(apiInit));
  const { response, error } = yield call(apiFn, apiInit);
  if (response) {
    yield put(entity.success(apiInit, response));
    console.log('success');
  } else yield put(entity.failure(apiInit, error));
}

// yeah! we can also bind Generators
export const fetchUser = fetchEntity.bind(null, user, api.fetchUser);

// load user unless it is cached
function* loadUser(headers) {
  const apiInit = {
    ...endpoints.auth_desc.user_login,
    headers,
  };

  yield call(fetchUser, apiInit);
}

/** *************************************************************************** */
/** ***************************** WATCHERS ************************************ */
/** *************************************************************************** */

export function* watchLoadUser() {
  while (true) {
    const { headers } = yield take(actions.HEADERS);
    yield call(loadUser, headers);
    console.log('watchLoadUser');
    const userData = yield select(getUser);
    console.log('user data', userData);
    // yield put(actions.getUser(res));
  }
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([fork(watchLoadUser)]);
}
