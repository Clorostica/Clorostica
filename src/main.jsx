import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import './Styles/index.css'
// import './Styles/styles.css'
import "./Styles/bits-styles.css";
import { LanguageProvider } from "./i18n/LanguageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>,
);
