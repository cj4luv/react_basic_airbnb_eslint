const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

function createRequestTypes(base) {
  const result = [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});

  return result;
}

export const USER = createRequestTypes('USER');
export const WALLET = createRequestTypes('WALLET');

function action(type, payload = {}) {
  const result = {
    type,
    ...payload,
  };

  if (type === USER_SUCCESS) {
    console.log('action payload', payload);
  }

  return result;
}

export const USER_REQUEST = USER[REQUEST];
export const USER_SUCCESS = USER[SUCCESS];
export const USER_FAILURE = USER[FAILURE];

export const WALLET_REQUEST = WALLET[REQUEST];
export const WALLET_SUCCESS = WALLET[SUCCESS];
export const WALLET_FAILURE = WALLET[FAILURE];

export const user = {
  request: loginApi => action(USER_REQUEST, { loginApi }),
  success: (loginApi, response) => action(USER_SUCCESS, { loginApi, response }),
  failure: (loginApi, error) => action(USER_FAILURE, { loginApi, error }),
};

export const wallet = {
  request: apiInit => action(WALLET_REQUEST, { apiInit }),
  success: (apiInit, response) => action(WALLET_SUCCESS, { apiInit, response }),
  failure: (apiInit, error) => action(WALLET_FAILURE, { apiInit, error }),
};

// 액션 타입 정의
export const WITHDRAWAL_AMOUNT = 'atm/AMOUNT';

// 액션 생섬함수 정의
export const changeAmount = amount => ({ type: WITHDRAWAL_AMOUNT, amount });

export const HEADERS = 'HEADERS';

export const changeHeaders = headers => ({ type: HEADERS, headers });

export const DEVICE = 'DEVICE';

export const changeDevice = device => ({ type: DEVICE, device });
