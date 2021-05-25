import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App'
import { BrowserRouter, Route} from 'react-router-dom';

function render() {
  ReactDOM.render(<BrowserRouter>
    <React.Fragment>
      <Route exact path='/' component={App} /> 
    </React.Fragment>
    </BrowserRouter>, document.getElementById('root')
  );
}
render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
