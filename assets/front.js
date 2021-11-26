import "./css/front.css";
import {Icon, logo} from "./js/Icon";

let a = 0;
let icon = new Icon(a);

for (let i = 0; i < logo.length; i++) {
    icon.create();
}

document.getElementById("dock").addEventListener("dblclick", function () {
    if (a === 0) {
        // left
        document.getElementById("dock").style.flexDirection = "column";
        document.getElementById("dock").style.left = "0";
        document.getElementById("dock").style.width = "6%";
        document.getElementById("dock").style.height = "100%";

        a++;
    }
    else if (a === 1) {
        // top
        document.getElementById("dock").style.flexDirection = "row";
        document.getElementById("dock").style.top = "0";
        document.getElementById("dock").style.left = "initial";
        document.getElementById("dock").style.width = "70%";
        document.getElementById("dock").style.height = "90px";

        a++;
    }
    else if (a === 2) {
        // right
        document.getElementById("dock").style.flexDirection = "column";
        document.getElementById("dock").style.right = "0";
        document.getElementById("dock").style.width = "6%";
        document.getElementById("dock").style.height = "100%";
        document.getElementById("dock").style.top = "initial";

        a++;
    }
    else {
        //bottom
        document.getElementById("dock").style.flexDirection = "row";
        document.getElementById("dock").style.bottom = "0";
        document.getElementById("dock").style.width = "70%";
        document.getElementById("dock").style.right = "initial";
        document.getElementById("dock").style.height = "90px";

        a = 0;
    }
})