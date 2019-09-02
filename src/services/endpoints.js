const endpoints = {
  auth_desc: {
    user_check_signup_doing: {
      url: '/hipay/restapi/user/check_signup_doing/',
      method: 'GET',
    },
    user_register: {
      url: '/hipay/restapi/user/register/',
      method: 'POST',
    },
    user_login: {
      url: '/hipay/restapi/user/login/',
      method: 'PUT',
    },
  },
  model_desc: {
    user_wallet_get_my: {
      url: '/hipay/restapi/user_wallet/get_my/',
      method: 'GET',
    },
    inquire_insert: {
      url: '/hipay/restapi/inquire/insert/',
      method: 'POST',
    },
    inquire_get_my: {
      url: '/hipay/restapi/inquire/get_my/',
      method: 'GET',
    },
    inquire_get_one: {
      url: '/hipay/restapi/inquire/get_one/',
      method: 'GET',
    },
    notice_get: {
      url: '/hipay/restapi/notice/get/',
      method: 'GET',
    },
    notice_get_one: {
      url: '/hipay/restapi/notice/get_one/',
      method: 'GET',
    },
  },
  hipay_desc: {
    hipay_etc: {
      hipay_etc_get_my_wal: {
        url: '/hipay/restapi/point/get_my_wallet/',
        method: 'GET',
      },
    },
    get_my_pt_use: {
      url: '/hipay/restapi/log/get_my_pt_use/',
      method: 'GET',
    },
  },
  user: {
    get_autopay: {
      url: '/hipay/restapi/user/get_autopay/',
      method: 'GET',
    },
    update_autopay: {
      url: '/hipay/restapi/user/update_autopay/',
      method: 'PUT',
    },
  },
  test: {
    test_api: {
      url: '/hipay/restapi/bank/kftc/temp/',
      method: 'POST',
    },
  },
  atm: {
    req_tmp: {
      url: '/hipay/restapi/atm/req_tmp/',
      method: 'GET',
    },
    withdraw: {
      url: '/hipay/restapi/atm/withdraw/',
      method: 'GET',
    },
  },
};

export default endpoints;
