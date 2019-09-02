import { WITHDRAWAL_AMOUNT } from '../actions/actions';

// **** 초기상태 정의
const initialState = {
  amount: 0,
};

// **** 리듀서 작성
export default function atm(state = initialState, action) {
  switch (action.type) {
    case WITHDRAWAL_AMOUNT:
      return {
        ...state,
        amount: action.amount,
      };
    default:
      return state;
  }
}
