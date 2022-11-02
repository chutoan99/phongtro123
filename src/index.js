import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import Save from "./routes";
import { Provider } from "react-redux";
import store from "./redux/store";
import index from "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <Save />
    </Router>
  </Provider>
);

reportWebVitals();
