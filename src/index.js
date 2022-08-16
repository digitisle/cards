import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import "normalize.css";
import "./index.css";

import configureStore from "./redux/store";

import App from "./components/App";

const store = configureStore();

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
