import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import wallet from './wallet';
import atm from './atm';
import device from './device';
import entities from './entities';
import user from './user';
import headers from './headers';

export default history => combineReducers({
  device,
  headers,
  user,
  wallet,
  atm,
  entities,
  router: connectRouter(history),
  // 다른 리듀서를 만들게되면 여기에 넣어줌..
});
