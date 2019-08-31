import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { applyMiddleware, createStore, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import * as serviceWorker from "./serviceWorker";
import App from "./component/App";
import rootraducer from "./reducer/index";
import "semantic-ui-css/semantic.min.css";

const store = createStore(
  rootraducer,
  compose(
    applyMiddleware( thunk),
    composeWithDevTools()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
