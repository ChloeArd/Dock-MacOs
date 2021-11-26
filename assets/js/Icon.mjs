import {Dock} from "./Dock.mjs";
import {Page} from "./Page.mjs";

let x = 0;
export let logo = [
    { logo:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png", link:"https://github.com", title: "GitHub"},
    { logo:"https://static-s.aa-cdn.net/img/gp/20600000009072/ccWDU4A7fX1R24v-vvT480ySh26AYp97g1VrIB_FIdjRcuQB2JP2WdY7h_wVVAeSpg=s300?v=1", link:"https://www.facebook.com", title: "Facebook"},
    { logo:"https://f.hellowork.com/blogdumoderateur/2019/11/twitter-logo.jpg", link:"https://twitter.com", title: "Twitter"},
    { logo:"https://cabinetdac.com/wp-content/uploads/2021/09/Instagram_logo_2016.svg_.png", link:"https://www.instagram.com", title: "Instagram"},
    { logo:"https://www.numerama.com/content/uploads/2016/06/13502130_10153696123838870_522765110773053650_n-796x796-2.png", link:"https://www.netflix.com/browse", title: "Netflix"},
    { logo:"http://assets.stickpng.com/images/580b57fcd9996e24bc43c545.png", link:"https://www.youtube.com", title: "YouTube"},
    { logo:"https://www.netenvie.com/contenus/images/blog/Google-logo-2015.png", link:"https://www.google.com", title: "Google"},
    { logo:"https://justphotographie.fr/wp-content/uploads/2019/07/adidas.jpg", link:"https://www.adidas.fr", title: "Adidas"},
    { logo:"https://www.episod.com/wp-content/uploads/2019/04/b2b-logo-nike.jpg", link:"https://www.nike.com", title: "nike"},
];


export let Icon = function () {

    // create a icon
    this.create = function () {
        let icon = document.createElement("a");
        icon.id = "icon" + x;
        icon.className = "icon tooltip";
        icon.href = logo[x]['link'];
        icon.target = "_blank";
        document.getElementById("dock").append(icon);

        let image = document.createElement("img");
        image.src = logo[x]['logo'];
        image.alt = logo[x]['title'];
        image.id = 'image' + x;
        icon.append(image);

        let tooltip = document.createElement("span");
        tooltip.className = "tooltiptext";
        tooltip.innerHTML = logo[x]['title'];
        icon.append(tooltip);

        let a = 0;
        let dock = new Dock(x);

        if (a === 0) {
            dock.bottom();
        }

        // move the dock by double clicking on the left, up, right and down, also change the animation of the icons
        document.getElementById("dock").addEventListener("dblclick", function () {
            if (a === 0) {
                // left
                document.getElementById("dock").style.flexDirection = "column";
                document.getElementById("dock").style.left = "0";
                document.getElementById("dock").style.width = "6%";
                document.getElementById("dock").style.height = "100%";
                dock.left();
                a++;
            } else if (a === 1) {
                // top
                document.getElementById("dock").style.flexDirection = "row";
                document.getElementById("dock").style.top = "0";
                document.getElementById("dock").style.left = "initial";
                document.getElementById("dock").style.width = "70%";
                document.getElementById("dock").style.height = "90px";
                dock.top();
                a++;
            } else if (a === 2) {
                // right
                document.getElementById("dock").style.flexDirection = "column";
                document.getElementById("dock").style.right = "0";
                document.getElementById("dock").style.width = "6%";
                document.getElementById("dock").style.height = "100%";
                document.getElementById("dock").style.top = "initial";
                dock.right();
                a++;
            } else {
                //bottom
                document.getElementById("dock").style.flexDirection = "row";
                document.getElementById("dock").style.bottom = "0";
                document.getElementById("dock").style.width = "70%";
                document.getElementById("dock").style.right = "initial";
                document.getElementById("dock").style.height = "90px";
                dock.bottom();
                a = 0;
            }
        });

        // brings up a fake page with the title of the icon that was clicked
        let click = document.getElementById("icon" + x);
        click.addEventListener("click", function () {
            let y = this.id;
            let recupId = y.replace("icon", "");

            let page = new Page(logo[recupId]['title']);
            page.open();

            document.getElementById("red").addEventListener("click", function () {
                document.getElementById("navigator").style.display = "none";
            });
        });
        x++;
    }

    // create an "add" button to add a new icon
    this.add = function () {
        let add = document.createElement("div");
        add.id = "add";
        add.className = "icon tooltip";
        document.body.append(add);

        let image = document.createElement("img");
        image.src = "https://media.istockphoto.com/vectors/black-plus-sign-positive-symbol-vector-id688550958?k=20&m=688550958&s=612x612&w=0&h=wvzUqT3u3feYygOXg3GB9pYBbqIsyu_xpvfTX-6HOd0=";
        image.alt = "Ajout";
        add.append(image);

        let tooltip = document.createElement("span");
        tooltip.className = "tooltiptext";
        tooltip.innerHTML = "Ajout";
        add.append(tooltip);

        // brings up a fake page in which you can add an icon using the form
        document.getElementById("add").addEventListener("click", function () {
            let page = new Page();
            page.add();

            // make the "add" page disappear
            document.getElementById("red2").addEventListener("click", function () {
                document.getElementById("navigator2").style.display = "none";
            });
        });
    }
}