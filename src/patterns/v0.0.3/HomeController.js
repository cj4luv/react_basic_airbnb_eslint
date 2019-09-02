import { getToken } from '../../common/Auth';
import RestAPI from '../../common/RestAPI';
import DTO from '../../common/DTO';
import { setItem } from '../../common/StorageUtils';
import { USER_DATA_STORAGE_NAME } from '../../common/Constants';
import Exception from './HomeException';

class HomeController {
  cashCadInitData = async (headers) => {
    const res = await getToken(headers);
    console.log('token', res.results.token);
    if (res.status !== 200) {
      Exception(res);
      return null;
    }

    this.setToken(res.results.token);

    const nextHeaders = {
      ...headers,
      token: res.results.token,
    };

    console.log('nextHeaders', nextHeaders, headers);

    const walletRes = await this.userWalletGetMy(nextHeaders);
    // const tmp = await this.getReqTmp(headers);
    // const tmp = await this.reqWithdrawPt(headers);
    // console.log('tmp', tmp);

    if (walletRes.status !== 200) {
      Exception(walletRes);
      return null;
    }

    console.log('walletRes', walletRes);

    return walletRes;
  };

  setToken = token => setItem(USER_DATA_STORAGE_NAME, token);

  userWalletGetMy = async (headers) => {
    // api값을 정의한다.
    const api = {
      ...RestAPI.hipay_desc.hipay_etc.hipay_etc_get_my_wal,
      query: '',
      headers,
    };

    const res = await DTO(api);

    console.log('userWalletGetMy', res);

    return res;
  };

  isLogin = async (headers) => {
    const res = await getToken(headers);
    if (res.status !== 200) {
      Exception(res);
      return false;
    }

    return true;
  };
}

export default HomeController;
