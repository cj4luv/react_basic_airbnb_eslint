import { getToken } from './Auth';
import RestAPI from '../../common/RestAPI';
import DTO from './DTO';
import { setItem } from '../../common/StorageUtils';
import { USER_DATA_STORAGE_NAME } from '../../common/Constants';
import Exception from './Exception';

class Controller {
  cashCadInitData = async (headers, actions) => {
    const res = await getToken(headers);

    const isException = Exception(res, actions);

    if (isException) return null;

    this.setToken(res.results.token);

    const walletRes = await this.userWalletGetMy(headers);

    const isWalletResException = Exception(res, actions);

    if (isWalletResException) return null;

    console.log('walletRes', walletRes);

    return walletRes;
  };

  setToken = token => setItem(USER_DATA_STORAGE_NAME, token);

  userWalletGetMy = async (headers) => {
    // api값을 정의한다.
    const api = {
      ...RestAPI.hipay_desc.hipay_etc_get_my_wal,
      query: '',
      headers,
    };

    const res = await DTO(api);

    return res;
  };

  goToDirection = async (resolve, reject) => {
    const response = await getToken(reject);
    console.log('goToDirection', response);
    if (response) {
      resolve(response);
    }
  };
}

export default Controller;
