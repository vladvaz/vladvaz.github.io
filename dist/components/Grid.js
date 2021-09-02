import React from "../../_snowpack/pkg/react.js";
let Grid = ({children}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1 print:grid-cols-12 a4:grid-cols-12 grid-rows-1 min-h-full"
  }, children);
};
export default Grid;
