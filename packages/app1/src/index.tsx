import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";

import App from "./App";

const singleSpaReactApp = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
});

export const bootstrap = singleSpaReactApp.bootstrap;
export const mount = singleSpaReactApp.mount;
export const unmount = singleSpaReactApp.unmount;
export const update = singleSpaReactApp.update;
