import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";

import "./i18n";

// Styles
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
