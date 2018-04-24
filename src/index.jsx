// import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import 'react-hot-loader/patch';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import store from './store';
import './styles.css';

import './theme/globalStyle';

import AppRouter from './appRouter';

// OfflinePluginRuntime.install();

const rootEl = document.getElementById('root');

const renderApp = Component => {
  render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    rootEl,
  );
};

renderApp(AppRouter);

// // if (module.hot) {
// //   module.hot.accept();
// // }


// if (module.hot) module.hot.accept(AppRouter, () => renderApp(AppRouter));
