import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import device from './device';
import entities from './entities';
import user from './user';
import headers from './headers';

export default history => combineReducers({
  device,
  headers,
  user,
  entities,
  router: connectRouter(history),
  // 다른 리듀서를 만들게되면 여기에 넣어줌..
});
