import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Global } from './styled/Common.style.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <>
      <Global />
      <App />
    </>
  </React.StrictMode>,
  document.getElementById('root')
);
