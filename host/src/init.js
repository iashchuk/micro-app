import "systemjs/dist/system.min";
import "systemjs/dist/extras/amd";
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ReactRouterDOM from "react-router-dom";
import map from "./importmap.json";

window.System.addImportMap(map);
window.System.set("http://fake-cdn/react.js", React);
window.System.set("http://fake-cdn/react-dom.js", ReactDOM);
window.System.set("http://fake-cdn/react-router-dom.js", ReactRouterDOM);
