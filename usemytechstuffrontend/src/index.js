import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers/index";
import {BrowserRouter as Router} from 'react-router-dom';
//this is used so both the chrome extention plus applyMiddleware would work .
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
ReactDOM.render(
  <Router>
  <Provider store={store}>
    <App />
  </Provider></Router>,
  document.getElementById("root")
);
