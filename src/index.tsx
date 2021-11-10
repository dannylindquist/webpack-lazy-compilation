import * as React from "react";
import { render } from "react-dom";
import { App } from "./components/App";

import { loader } from "./components/loader";

const rootEl = document.getElementById("root");

const workBench = {
  loader: loader.load,
};

render(<App workbench={workBench} />, rootEl);
