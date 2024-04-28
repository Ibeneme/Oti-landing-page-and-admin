import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AOSWrapper from "./Context/aos.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AOSWrapper>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AOSWrapper>
    </Provider>
  </React.StrictMode>
);
