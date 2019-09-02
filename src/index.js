import React from 'react';
import ReactDOM from 'react-dom';

import { ConnectedRouter } from 'connected-react-router';
// **** (1 - 1) Provider 불러오기
import { Provider } from 'react-redux';
import configureStore, { history } from './store/configureStore';

import './reset.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

import rootSaga from './sagas/sagas';

// **** (2) 스토어를 만들고 현재 값 확인해보기
const store = configureStore();

const setSagas = () => {
  if (process.env.NODE_ENV === 'development') {
    // sagas start
    console.log('set sagas');
    store.runSaga(rootSaga);
  } else {
    console.log('production');
  }
};

setSagas();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

// we don't need Worker because of it's hybrid app project.
serviceWorker.unregister();
