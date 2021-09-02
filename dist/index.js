import * as __SNOWPACK_ENV__ from '../_snowpack/env.js';
import.meta.env = __SNOWPACK_ENV__;

import React from "../_snowpack/pkg/react.js";
import ReactDOM from "../_snowpack/pkg/react-dom.js";
import {BrowserRouter as Router} from "../_snowpack/pkg/react-router-dom.js";
import {RecoilRoot} from "../_snowpack/pkg/recoil.js";
import App from "./App.js";
import "./index.css.proxy.js";
import "../_snowpack/pkg/tailwindcss/tailwind.css.proxy.js";
ReactDOM.render(/* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(RecoilRoot, null, /* @__PURE__ */ React.createElement(Router, null, /* @__PURE__ */ React.createElement(App, null)))), document.getElementById("root"));
if (undefined /* [snowpack] import.meta.hot */ ) {
  undefined /* [snowpack] import.meta.hot */ .accept();
}
