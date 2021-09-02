import {atom, selector} from "../../_snowpack/pkg/recoil.js";
import en_EN from "../data/en_EN.json.proxy.js";
import pt_PT from "../data/pt_PT.json.proxy.js";
const languages = [en_EN, pt_PT];
export const selectLanguange = atom({
  key: "selectLanguange",
  default: "pt-PT"
});
export const currentLanguage = selector({
  key: "currentLanguage",
  get: ({get}) => {
    let c = get(selectLanguange);
    switch (c) {
      default:
      case "en-EN":
        return languages[0];
      case "pt-PT":
        return languages[1];
    }
  }
});
