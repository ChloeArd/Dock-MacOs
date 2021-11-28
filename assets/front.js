import "./css/front.css";
import {Icon, logo} from "./js/Icon.mjs";

let icon = new Icon();

for (let i = 0; i < logo.length; i++) {
    icon.create();
}

icon.add();