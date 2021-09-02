import {faGithub, faLinkedin} from "../../_snowpack/pkg/@fortawesome/free-brands-svg-icons.js";
import {faEnvelope} from "../../_snowpack/pkg/@fortawesome/free-regular-svg-icons.js";
import {faCaretRight, faPhone} from "../../_snowpack/pkg/@fortawesome/free-solid-svg-icons.js";
import {FontAwesomeIcon} from "../../_snowpack/pkg/@fortawesome/react-fontawesome.js";
import React from "../../_snowpack/pkg/react.js";
import LeftHeader from "./LeftHeader.js";
let PersonalInfo = ({title, data}) => {
  let nameStyles = `text-gray-800 font-sans font-bold text-base`;
  let valueStyles = `mb-4 font-semibold text-sm text-gray-600 font-sans break-words`;
  let parseValues = ({name, type, value}) => {
    const rightMargin = 8;
    switch (type) {
      case "email":
        return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("li", {
          className: nameStyles
        }, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
          style: {marginRight: `${rightMargin}px`},
          icon: faEnvelope,
          fixedWidth: true
        }), name), /* @__PURE__ */ React.createElement("li", {
          className: valueStyles
        }, /* @__PURE__ */ React.createElement("a", {
          href: `mailto:${value}`
        }, value)));
      case "linkedin":
        return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("li", {
          className: nameStyles
        }, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
          style: {marginRight: `${rightMargin}px`},
          icon: faLinkedin,
          fixedWidth: true
        }), name), /* @__PURE__ */ React.createElement("li", {
          className: valueStyles
        }, /* @__PURE__ */ React.createElement("a", {
          href: `http://${value}`
        }, value)));
      case "phone":
        return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("li", {
          className: nameStyles
        }, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
          style: {marginRight: `${rightMargin}px`},
          icon: faPhone,
          fixedWidth: true
        }), name), /* @__PURE__ */ React.createElement("li", {
          className: valueStyles
        }, /* @__PURE__ */ React.createElement("a", {
          href: `tel:+${value}`
        }, value)));
      case "git":
        return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("li", {
          className: nameStyles
        }, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
          style: {marginRight: `${rightMargin}px`},
          icon: faGithub,
          fixedWidth: true
        }), name), /* @__PURE__ */ React.createElement("li", {
          className: valueStyles
        }, /* @__PURE__ */ React.createElement("a", {
          href: `http://${value}`
        }, value)));
      default:
        return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("li", {
          className: nameStyles
        }, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
          style: {marginRight: `${rightMargin}px`},
          icon: faCaretRight,
          fixedWidth: true
        }), name), /* @__PURE__ */ React.createElement("li", {
          className: valueStyles
        }, value));
    }
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(LeftHeader, {
    title
  }), /* @__PURE__ */ React.createElement("ul", {
    className: "mt-1 text-left"
  }, data.map((info, i) => /* @__PURE__ */ React.createElement("div", {
    key: i
  }, parseValues(info)))));
};
export default PersonalInfo;
