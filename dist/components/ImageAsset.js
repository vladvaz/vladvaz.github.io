import React from "../../_snowpack/pkg/react.js";
import t from "../img/green_vase.png.proxy.js";
let ImageAsset = ({x, y}) => {
  let size = 550;
  return /* @__PURE__ */ React.createElement("div", {
    className: " bg-purple-400 absolute",
    style: {
      zIndex: 1,
      left: `${x}px`,
      top: `${y}px`,
      backgroundImage: `url(${t})`,
      backgroundSize: "contain",
      width: `${size}px`,
      height: `${size}px`,
      maskMode: "alpha"
    }
  });
};
export default ImageAsset;
