import RestAPI from '../../common/RestAPI';
import Fetch from '../../common/HipayFetch';
import { setItem } from '../../common/StorageUtils';
import { USER_DATA_STORAGE_NAME } from '../../common/Constants';
import Exception from './Exception';

export const getToken = async (resolve, reject) => {
  const api = {
    ...RestAPI.auth_desc.user_login,
    query: '',
  };
  const res = await Fetch(api);

  if (res.status !== 200) {
    return Exception(res, 'Auth', 'getToken', reject);
  }

  setToken(res.results.token);
  return resolve(res);
};

export const setToken = token => setItem(USER_DATA_STORAGE_NAME, token);
