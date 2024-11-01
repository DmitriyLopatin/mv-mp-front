import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from 'store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);


