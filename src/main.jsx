import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css'

import { store, persistor } from '/src/redux/store.js';
import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {/* <BrowserRouter basename="/goit-react-hw-06new-pr"> */}
        <App />
      {/* </BrowserRouter> */}
    </PersistGate>
  </Provider>
</React.StrictMode>
);

