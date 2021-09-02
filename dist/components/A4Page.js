import React from "../../_snowpack/pkg/react.js";
import ImageAsset from "./ImageAsset.js";
let A4Page = ({pageNumber, children, marginTop}) => {
  let randomImages = (n) => {
    let v = [];
    for (let i = 0; i < n; i++) {
      let x = 850 + Math.random() * 500;
      let y = 0 + Math.random() * 500;
      v.push(/* @__PURE__ */ React.createElement(ImageAsset, {
        x,
        y
      }));
    }
    return v;
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: `w-full relative mt-0 p-4 a4:p-3 print:p-3 bg-gray-50 print:w-a4 a4:w-a4 a4:h-a4 print:h-a4 print:m-0 a4:mb-4 a4:shadow-2xl ${marginTop ? "a4:mt-4" : ""}`
  }, children, /* @__PURE__ */ React.createElement("div", {
    className: "hidden a4:block print:block absolute right-3 bottom-3 text-base text-gray-800 font-semibold"
  }, pageNumber));
};
export default A4Page;
