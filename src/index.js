import React from "react";
import ReactDOM from "react-dom";

import {uniqueId} from "lodash";

import App from "./App";


ReactDOM.render(<App id={uniqueId()} />, document.querySelector("#root"));
