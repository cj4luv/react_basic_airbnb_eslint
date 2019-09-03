const IS_DEV_MODE = process.env.NODE_ENV === 'development';

export const SERVER_URL = IS_DEV_MODE
  ? 'http://14.32.136.156:7460'
  : 'https://test2.supcat.co.kr';

const API_PREFIX = 'hipay';

const SERVER_HOST_URL = `${SERVER_URL}/${API_PREFIX}/restapi`;

const endpoint = {
  auth: {
    login: `${SERVER_HOST_URL}/auth/login/`,
  },
  user: {
    get_noti_unread_cnt: `${SERVER_HOST_URL}/user/get_noti_unread_cnt/`,
    get_autopay: `${SERVER_HOST_URL}/user/get_autopay/`,
  },
  loan: {
    nhc: `${SERVER_HOST_URL}/loan/nhc/`,
    loan_result: `${SERVER_HOST_URL}/loan/nhc/loan_result/`,
    credit_info: `${SERVER_HOST_URL}/loan/credit_info/`,
  },
  bank: {
    kftc_check: `${SERVER_HOST_URL}/bank/kftc/check/`,
    refund_status: `${SERVER_HOST_URL}/bank/refund/status/`,
    kftc_deposit_bankacc: `${SERVER_HOST_URL}/bank/kftc/deposit_bankacc/`,
  },
  point: {
    get_my_wallet: `${SERVER_HOST_URL}/point/get_my_wallet/`,
  },
  giftycon: {
    get_seq: `${SERVER_HOST_URL}/giftycon/get_seq/`,
  },
};

export default endpoint;
