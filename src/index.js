import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import "./index.css"

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ToastContainer position="top-center" autoClose={500} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
