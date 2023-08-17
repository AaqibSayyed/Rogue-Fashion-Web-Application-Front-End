import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './context/productcontext';
import { FilterContextProvider } from './context/filterContext';
import { CartProvider } from './context/cart_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <AppProvider>
    <FilterContextProvider>
      <CartProvider>
  <App />
    </CartProvider>
  </FilterContextProvider>
  </AppProvider>
  </>
);

