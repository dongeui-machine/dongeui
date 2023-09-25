import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './pages/ScrollToTop';

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop/>
      <App />
    </BrowserRouter>
  </Provider>
);
