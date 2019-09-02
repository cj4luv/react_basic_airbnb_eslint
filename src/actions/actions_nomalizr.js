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

function action(type, payload = {}) {
  const result = {
    type,
    ...payload,
  };

  // console.log('action result', result);
  return result;
}

export const user = {
  request: init => action(USER[REQUEST], { init }),
  success: (init, response) => action(USER[SUCCESS], { init, response }),
  failure: (init, error) => action(USER[FAILURE], { init, error }),
};

// 액션 타입 정의
export const TOTAL = 'wallet/TOTAL';

// 액션 생섬함수 정의
export const changeTotal = total => ({ type: TOTAL, total });

export const WITHDRAWAL_AMOUNT = 'atm/AMOUNT';

export const changeAmount = amount => ({ type: WITHDRAWAL_AMOUNT, amount });

export const HEADERS = 'device/HEADERS';

export const changeHeaders = headers => ({ type: HEADERS, headers });
