import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'
import {Provider} from "react-redux";
import { createBrowserHistory } from 'history';
import * as serviceWorker from './serviceWorker';

import App from './views/App';
import reducers from "./reducers/index";

import './index.css';


const store = createStore(
    reducers,
    applyMiddleware(thunk)
)

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
    <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
