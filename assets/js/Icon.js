import {Dock} from "./Dock";

let x = 0;
export let logo = [
    { logo:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png", link:"https://github.com", title: "GitHub"},
    { logo:"https://static-s.aa-cdn.net/img/gp/20600000009072/ccWDU4A7fX1R24v-vvT480ySh26AYp97g1VrIB_FIdjRcuQB2JP2WdY7h_wVVAeSpg=s300?v=1", link:"https://www.facebook.com", title: "Facebook"},
    { logo:"https://f.hellowork.com/blogdumoderateur/2019/11/twitter-logo.jpg", link:"https://twitter.com", title: "Twitter"},
    { logo:"https://cabinetdac.com/wp-content/uploads/2021/09/Instagram_logo_2016.svg_.png", link:"https://www.instagram.com", title: "Instagram"},
    { logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png", link:"https://fr.linkedin.com", title: "LinkedIn"},
    { logo:"https://www.numerama.com/content/uploads/2016/06/13502130_10153696123838870_522765110773053650_n-796x796-2.png", link:"https://www.netflix.com/browse", title: "Netflix"},
    { logo:"http://assets.stickpng.com/images/580b57fcd9996e24bc43c545.png", link:"https://www.youtube.com", title: "YouTube"},
    { logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/800px-Gmail_icon_%282020%29.svg.png", link:"https://mail.google.com/mail/u/0", title: "Gmail"},
    { logo:"https://pic.clubic.com/v1/images/1774822/raw?fit=smartCrop&height=900&width=900&hash=89abf740dc5a3b64bd730634497645fa2595a537", link:"https://www.google.com/maps", title: "Google Maps"},
    { logo:"https://cdn.1min30.com/wp-content/uploads/2017/06/Symbole-Skype.jpg", link:"https://www.skype.com/fr/", title: "Skype"},
    { logo:"https://justphotographie.fr/wp-content/uploads/2019/07/adidas.jpg", link:"https://www.adidas.fr", title: "Adidas"},
    { logo:"https://www.episod.com/wp-content/uploads/2019/04/b2b-logo-nike.jpg", link:"https://www.nike.com", title: "nike"},
];


export let Icon = function (a) {

    this.create = function () {
        let icon = document.createElement("a");
        icon.id = "icon" + x;
        icon.className = "icon tooltip";
        icon.href = logo[x]['link'];
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

        let dock = new Dock(x);
        if (a === 0) {
            dock.bottom();
        }
        else if (a === 1) {
            dock.left();
        }
        else if (a === 2) {
            dock.top();
        }
        else {
            dock.right();
        }

        x++;
    }
}
