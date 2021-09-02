import React from "../../_snowpack/pkg/react.js";
import {useRecoilValue} from "../../_snowpack/pkg/recoil.js";
import {selectLanguange} from "./RecoilState.js";
let ExperienceItem = ({title, startDate, endDate, subTitle, bulletPoints, technologies}) => {
  const lang = useRecoilValue(selectLanguange);
  let parseDate = (date) => {
    if (date === null || date === void 0) {
      return null;
    }
    if (typeof date === "number") {
      return date;
    }
    const d = new Date(date);
    if (isNaN(d.getDate())) {
      return date;
    }
    return d.toLocaleString(lang, {month: "long", year: "numeric"});
  };
  let createDate = (startDate2, endDate2) => {
    let leftDate = parseDate(startDate2);
    let rightDate = parseDate(endDate2);
    if (leftDate && rightDate) {
      return /* @__PURE__ */ React.createElement("div", {
        className: "text-gray-800 font-semibold text-sm text-right"
      }, leftDate, " - ", rightDate);
    } else {
      return null;
    }
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "mt-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-gray-800 text-base font-semibold text-left"
  }, title), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row justify-between gap-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-sm text-left italic"
  }, subTitle), createDate(startDate, endDate)), /* @__PURE__ */ React.createElement("div", {
    className: "mt-2 text-gray-700 text-justify text-sm ml-3 a4:ml-6"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "list-disc"
  }, bulletPoints.map((b, i) => /* @__PURE__ */ React.createElement("li", {
    key: i
  }, b))), technologies && technologies?.length !== 0 ? /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row gap-2 flex-wrap mt-4"
  }, technologies.map((tech, i) => /* @__PURE__ */ React.createElement("span", {
    key: i,
    className: "bg-antiquegreen rounded-lg text-center self-center font-mono text-xs",
    style: {padding: "2px"}
  }, tech))) : null));
};
export default ExperienceItem;
