import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './context/productContext';
import { CartProvider } from './context/cartContext';
import { Provider } from 'react-redux';
import store from './reduxToolkit/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <AppProvider>
      <CartProvider>
      <Provider store={store}>
  <App />
    </Provider>
    </CartProvider>
  </AppProvider>
  </>
);

