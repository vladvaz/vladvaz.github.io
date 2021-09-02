import React from "../../_snowpack/pkg/react.js";
import ExperienceItem from "./ExperienceItem.js";
let ExperienceList = ({title, data, start, end}) => {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "text-gray-900 text-2xl font-semibold mt-8 uppercase"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "border-antiquegreen border-b-4"
  }, title)), data.slice(start, end).map((d, i) => /* @__PURE__ */ React.createElement(ExperienceItem, {
    key: i,
    ...d
  })));
};
export default ExperienceList;
