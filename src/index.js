import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import { ThemeProvider } from "./components/ThemeContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider> 
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
