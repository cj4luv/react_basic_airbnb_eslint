import {
  call, fork, put, all, take, select,
} from 'redux-saga/effects';
import endpoints from '../services/endpoints';
import * as actions from '../actions/actions';
import api from '../services';
import { getUser } from '../reducers/selectors';

import { setItem } from '../common/StorageUtils';
import { USER_DATA_STORAGE_NAME } from '../common/Constants';

const { user, wallet } = actions;

const setToken = token => setItem(USER_DATA_STORAGE_NAME, token);

/** *************************** Subroutines *********************************** */

function* fetchEntity(entity, apiFn, apiInit) {
  yield put(entity.request(apiInit));
  const { response, error } = yield call(apiFn, apiInit);
  if (response) {
    yield put(entity.success(apiInit, response));
    // console.log('success');
  } else yield put(entity.failure(apiInit, error));
}

// yeah! we can also bind Generators
export const fetchUser = fetchEntity.bind(null, user, api.fetchUser);
export const fetchWallet = fetchEntity.bind(null, wallet, api.fetchWallet);

// load user unless it is cached
function* loadUser(headers) {
  const apiInit = {
    ...endpoints.auth_desc.user_login,
    headers,
  };

  yield call(fetchUser, apiInit);
}

function* loadWallet(headers) {
  console.log('loadWallet', headers);
  const apiInit = {
    ...endpoints.hipay_desc.hipay_etc.hipay_etc_get_my_wal,
    headers,
  };

  yield call(fetchWallet, apiInit);
}

/** *************************************************************************** */
/** ***************************** WATCHERS ************************************ */
/** *************************************************************************** */

export function* watchLoadUser() {
  while (true) {
    const { device } = yield take(actions.DEVICE);

    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      id: device.uuid,
      dv_uuid: device.uuid,
      dv_serial: device.serial,
    };

    console.log('watchLoadUser', headers);

    yield call(loadUser, headers);
    const userData = yield select(getUser);

    setToken(userData.token);

    const nextHeaders = {
      ...headers,
      token: userData.token,
    };

    yield put(actions.changeHeaders({ ...nextHeaders }));
  }
}

export function* watchLoadWallet() {
  while (true) {
    console.log('watchLoadWallet');
    const { headers } = yield take(actions.HEADERS);

    console.log('watchLoadWallet headers', headers);
    yield call(loadWallet, headers);
  }
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    fork(watchLoadUser),
    fork(watchLoadWallet),
  ]);
}
