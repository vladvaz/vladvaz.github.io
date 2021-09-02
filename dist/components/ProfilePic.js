import React from "../../_snowpack/pkg/react.js";
import profilePic from "../img/profile_pic.jpg.proxy.js";
let ProfilePic = ({form, size}) => {
  return /* @__PURE__ */ React.createElement("img", {
    className: `${form} w-${size} self-center border-4 border-gray-50`,
    src: profilePic,
    alt: "Profile Picture"
  });
};
export default ProfilePic;
