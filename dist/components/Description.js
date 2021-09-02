import React from "../../_snowpack/pkg/react.js";
let Description = ({name, position, title, description}) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "mt-16 text-left font-mono uppercase text-5xl font-extrabold text-gray-700"
  }, name), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 text-right font-mono uppercase text-3xl font-bold text-gray-500 bg-antiquegreen p-1"
  }, position), /* @__PURE__ */ React.createElement("div", {
    className: "text-gray-900 text-2xl font-semibold mt-8 uppercase"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "border-antiquegreen border-b-4"
  }, title)), /* @__PURE__ */ React.createElement("div", {
    className: "mt-6 text-gray-700 text-sm text-justify"
  }, description));
};
export default Description;
