import { WALLET_SUCCESS } from '../actions/actions';

// **** 초기상태 정의
const initialState = {};

// **** 리듀서 작성
export default function wallet(state = initialState, action) {
  switch (action.type) {
    case WALLET_SUCCESS:
      return {
        ...state,
        ...action.response,
      };
    default:
      return state;
  }
}
