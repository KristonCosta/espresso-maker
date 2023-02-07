import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import reducer from './store/reducer';
import { applyMiddleware, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { loadState, saveState } from './store/localStorage';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: reducer,
  preloadedState: loadState(),

})

store.subscribe(() => {
  saveState({
    shots: store.getState().shots
  })
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App /> 
    </Provider>
  </React.StrictMode>
);
