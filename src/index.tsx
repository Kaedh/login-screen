import React from 'react';
import ReactDOM from 'react-dom';
import Signin from './pages/Signin';
import Global from './styles/Global';



ReactDOM.render(
  <React.StrictMode>
    <Global />
      <Signin />
  </React.StrictMode>,
  document.getElementById('root')
);
