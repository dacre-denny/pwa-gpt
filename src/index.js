import React from "react";
import ReactDOM from "react-dom";

import "./scss/app.scss";
import Root from "./root";
import store from "./store";

ReactDOM.render(<Root store={store} />, document.getElementById("app"));

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker.register("sw.js").then(
      function(registration) {
        console.log("Service worker registered");
      },
      function(err) {
        console.error("Service worker failed to register", err);
      }
    );
  });
}
