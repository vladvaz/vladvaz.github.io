import React, {useState} from "../../_snowpack/pkg/react.js";
import {useRecoilState} from "../../_snowpack/pkg/recoil.js";
import {selectLanguange} from "./RecoilState.js";
let Options = ({languages, options}) => {
  const [lang, setLang] = useRecoilState(selectLanguange);
  const [optionState, setOptionState] = useState(false);
  const onLanguageChange = (event) => {
    setLang(event.target.value);
  };
  const showAbout = () => {
    window.alert(options[0].value);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: `print:hidden m-1 fixed bottom-3 right-3 a4:bottom-10 a4:right-32 lg:bottom-10 lg:right-56 flex flex-col justify-center items-center z-10 bg-gray-50 shadow-2xl p-4 border-gray-300 border-2 ${optionState ? "rounded-lg" : "rounded-full"}`
  }, optionState ? /* @__PURE__ */ React.createElement("div", {
    className: "ease-in-out flex flex-col justify-center items-center gap-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "cursor-pointer absolute -right-3 -top-3 rounded-full w-6 h-6 bg-gray-300 hover:bg-gray-500 hover:text-gray-50 text-gray-900 flex flex-col justify-center items-center",
    onClick: () => setOptionState(false)
  }, "X"), /* @__PURE__ */ React.createElement("button", {
    className: "w-full bg-gray-300 shadow-2xl hover:bg-gray-500 hover:text-gray-50 p-2 rounded-lg text-gray-900 text-base flex flex-col justify-items-center items-center",
    onClick: showAbout
  }, /* @__PURE__ */ React.createElement("span", {
    className: "self-center"
  }, options[0].value)), /* @__PURE__ */ React.createElement("select", {
    className: "block w-full py-2 px-3 border rounded-lg shadow-2xl text-base border-none bg-gray-300 hover:bg-gray-500 hover:text-gray-50 text-gray-900",
    value: lang,
    onChange: onLanguageChange
  }, languages.map((v) => /* @__PURE__ */ React.createElement("option", {
    key: v.abr,
    value: v.abr
  }, v.translation)))) : /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "cursor-pointer w-10 h-10 rounded-full bg-gray-300 hover:bg-gray-500 hover:text-gray-50 flex flex-col justify-center items-center",
    onClick: () => setOptionState(true)
  }, "...")));
};
export default Options;
