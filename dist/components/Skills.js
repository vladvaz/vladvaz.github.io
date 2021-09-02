import React from "../../_snowpack/pkg/react.js";
import ProgressBar from "./ProgressBar.js";
import LeftHeader from "./LeftHeader.js";
let Skills = ({title, data}) => {
  const aux = [...data];
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(LeftHeader, {
    title
  }), aux.sort((a, b) => a.name.localeCompare(b.name)).map((v, i) => /* @__PURE__ */ React.createElement(ProgressBar, {
    ...v,
    key: i
  })));
};
export default Skills;
