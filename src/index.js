import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App'
import { BrowserRouter, Route} from 'react-router-dom';


function render() {
  ReactDOM.render(
  <BrowserRouter>
    <React.Fragment>
      <Route exact path='/' component={App} /> 
    </React.Fragment>
    </BrowserRouter>, document.getElementById('root')
  );

  if (module.hot) {
    module.hot.accept('./App', () => {
      ReactDOM.render(
        <BrowserRouter>
        <React.Fragment>
          <Route exact path='/' component={App} /> 
        </React.Fragment>
        </BrowserRouter>, document.getElementById('root')
      );
    })
  }
}
render();
reportWebVitals();
