import React from "react";

import ReactDOM from "react-dom";
// import * as ReactJsxRuntime from "react/jsx-runtime";
// import * as ReactRouterDom from "react-router-dom";

import "./styles/index.css";
import App from "./App";

// const externalDeps = {
//   react: React,
//   "react/jsx-runtime": ReactJsxRuntime,
//   "react-router-dom": ReactRouterDom,
// };

// window.getDependency = function (name) {
//   console.log("Call getDep ", name);
//   return externalDeps[name];
// };

ReactDOM.render(<App />, document.getElementById("root"));
