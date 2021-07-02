import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
//因為 robots 不如 card component是 default export，所以要{}
ReactDOM.render(
	<App />,
  document.getElementById('root')
);


reportWebVitals();
