import React from "../../_snowpack/pkg/react.js";
let Background = ({children, backImage}) => {
  return /* @__PURE__ */ React.createElement("div", {
    id: "appPar",
    className: "flex flex-col items-center bg-yellow-100 bg-repeat print:contents",
    style: {backgroundImage: `url(${backImage})`}
  }, children);
};
export default Background;
