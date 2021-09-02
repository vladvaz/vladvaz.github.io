import React from "../../_snowpack/pkg/react.js";
let ProgressBar = ({name, percentage}) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "text-gray-600 font-sans font-bold text-sm mt-1"
  }, name), /* @__PURE__ */ React.createElement("div", {
    className: "bg-gray-100 rounded-lg h-2 relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "absolute h-2 bg-antiquegreen-darker",
    style: {width: `${percentage}%`}
  })));
};
export default ProgressBar;
