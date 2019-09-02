import { createStore } from 'redux';
import { createHashHistory } from 'history';

import createRootReducer from '../reducers/reducers';

export const history = createHashHistory();

export default function configureStore() {
  return {
    ...createStore(
      createRootReducer(history),
    ),
  };
}
