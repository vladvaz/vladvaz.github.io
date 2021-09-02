import React from "../_snowpack/pkg/react.js";
import {useRecoilValue} from "../_snowpack/pkg/recoil.js";
import A4Page from "./components/A4Page.js";
import Background from "./components/Background.js";
import ColumnOne from "./components/ColumnOne.js";
import ColumnTwo from "./components/ColumnTwo.js";
import Description from "./components/Description.js";
import ExperienceList from "./components/ExperienceList.js";
import Footer from "./components/Footer.js";
import Grid from "./components/Grid.js";
import Options from "./components/Options.js";
import PersonalInfo from "./components/PersonalInfo.js";
import ProfilePic from "./components/ProfilePic.js";
import {currentLanguage} from "./components/RecoilState.js";
import Skills from "./components/Skills.js";
import backImage from "./img/black-linen.png.proxy.js";
let App = ({}) => {
  const {personalInfoData, profile, educationData, experienceData, academicProjectsData, skillsData, languages, options} = useRecoilValue(currentLanguage);
  return /* @__PURE__ */ React.createElement(Background, {
    backImage
  }, /* @__PURE__ */ React.createElement(Options, {
    languages,
    options
  }), /* @__PURE__ */ React.createElement(A4Page, {
    pageNumber: 1,
    marginTop: true
  }, /* @__PURE__ */ React.createElement(Grid, null, /* @__PURE__ */ React.createElement(ColumnOne, null, /* @__PURE__ */ React.createElement(ProfilePic, {
    form: "rounded-full",
    size: "40"
  }), /* @__PURE__ */ React.createElement(PersonalInfo, {
    ...personalInfoData
  }), /* @__PURE__ */ React.createElement(Skills, {
    ...skillsData
  })), /* @__PURE__ */ React.createElement(ColumnTwo, null, /* @__PURE__ */ React.createElement(Description, {
    ...profile
  }), /* @__PURE__ */ React.createElement(ExperienceList, {
    ...experienceData
  }), /* @__PURE__ */ React.createElement(ExperienceList, {
    ...educationData
  })))), /* @__PURE__ */ React.createElement(A4Page, {
    pageNumber: 2
  }, /* @__PURE__ */ React.createElement(Grid, null, /* @__PURE__ */ React.createElement(ColumnOne, null), /* @__PURE__ */ React.createElement(ColumnTwo, null, /* @__PURE__ */ React.createElement(ExperienceList, {
    ...academicProjectsData,
    start: 0,
    end: 5
  })))), /* @__PURE__ */ React.createElement(A4Page, {
    pageNumber: 3
  }, /* @__PURE__ */ React.createElement(Grid, null, /* @__PURE__ */ React.createElement(ColumnOne, null), /* @__PURE__ */ React.createElement(ColumnTwo, null, /* @__PURE__ */ React.createElement(ExperienceList, {
    ...academicProjectsData,
    start: 5
  })))), /* @__PURE__ */ React.createElement(Footer, null, /* @__PURE__ */ React.createElement(PersonalInfo, {
    ...personalInfoData
  })));
};
export default App;
