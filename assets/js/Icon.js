let x = 0;
let logo = [
    { logo:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png", link:"https://github.com", title: "GitHub"},
    { logo:"https://static-s.aa-cdn.net/img/gp/20600000009072/ccWDU4A7fX1R24v-vvT480ySh26AYp97g1VrIB_FIdjRcuQB2JP2WdY7h_wVVAeSpg=s300?v=1", link:"https://www.facebook.com", title: "Facebook"},
    { logo:"https://f.hellowork.com/blogdumoderateur/2019/11/twitter-logo.jpg", link:"https://twitter.com", title: "Twitter"},
    { logo:"https://cdn.pixabay.com/photo/2016/09/17/07/03/instagram-1675670_640.png", link:"https://www.instagram.com", title: "Instagram"},
    { logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png", link:"https://fr.linkedin.com", title: "LinkedIn"},
    { logo:"https://www.numerama.com/content/uploads/2016/06/13502130_10153696123838870_522765110773053650_n-796x796-2.png", link:"https://www.netflix.com/browse", title: "Netflix"},
    { logo:"http://assets.stickpng.com/images/580b57fcd9996e24bc43c545.png", link:"https://www.youtube.com", title: "YouTube"},
    { logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/800px-Gmail_icon_%282020%29.svg.png", link:"https://mail.google.com/mail/u/0", title: "Gmail"},
    { logo:"https://pic.clubic.com/v1/images/1774822/raw?fit=smartCrop&height=900&width=900&hash=89abf740dc5a3b64bd730634497645fa2595a537", link:"https://www.google.com/maps", title: "Google Maps"},
    { logo:"https://cdn.1min30.com/wp-content/uploads/2017/06/Symbole-Skype.jpg", link:"https://www.skype.com/fr/", title: "Skype"},
    { logo:"https://justphotographie.fr/wp-content/uploads/2019/07/adidas.jpg", link:"https://www.adidas.fr", title: "Adidas"},
    { logo:"https://www.episod.com/wp-content/uploads/2019/04/b2b-logo-nike.jpg", link:"https://www.nike.com", title: "nike"},
    { logo:"https://img.utdstc.com/icon/709/125/709125b2e239438a8869f4f58bc100278ea2a084d5f89f5bd2ccdd7ef69d4739:200", link:"https://www.vinted.fr", title: "Vinted"},
    { logo:"https://animnord.chloeard.fr/assets/img/chien_chat_bleu.png", link:"https://animnord.chloeard.fr/", title: "Anim'Nord"},
    { logo:"https://cdn.iconscout.com/icon/free/png-256/marvel-282124.png", link:"https://www.marvel.com", title: "Marvel"},
];


export let Icon = function () {

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

        let icons = document.getElementsByClassName("icon");
        console.log(icons.length);



        let iconHover = document.getElementById("icon" + x);


        iconHover.addEventListener("mouseenter", function () {
            let y = this.id;
            let recupId = y.replace("icon", "");

            let iconLess1 = document.getElementById("icon" + parseInt(recupId - 1));
            let iconLess2 = document.getElementById("icon" + parseInt(recupId - 2));
            let a = parseInt(recupId) + 1;
            let b = parseInt(recupId) + 2;
            let iconAdd1 = document.getElementById("icon" + a);
            let iconAdd2 = document.getElementById("icon" + b);


            iconHover.style.transform = "scale(1.5, 1.5) translate(0, -50px)";
            iconHover.style.margin = "0 20px";
            if (iconLess1) {
                iconLess1.style.transform = "scale(1.3, 1.3) translate(0, -40px)";
                iconLess1.style.padding = "0 20px";
                document.getElementById("image" + parseInt(recupId - 1)).style.width = "70px";
                document.getElementById("image" + parseInt(recupId - 1)).style.height = "70px";

            }
            if (iconAdd1) {
                iconAdd1.style.transform = "scale(1.3, 1.3) translate(0, -40px)";
                iconAdd1.style.padding = "0 20px";
                document.getElementById("image" + a).style.width = "70px";
                document.getElementById("image" + a).style.height = "70px";

            }
            if (iconLess2) {
                iconLess2.style.transform = "scale(1.3, 1.3) translate(0, -20px)";
                iconLess2.style.padding = "0 20px";
                document.getElementById("image" + parseInt(recupId - 2)).style.width = "60px";
                document.getElementById("image" + parseInt(recupId - 2)).style.height = "60px";

            }
            if (iconAdd2) {
                iconAdd2.style.transform = "scale(1.3, 1.3) translate(0, -20px)";
                iconAdd2.style.padding = "0 20px";
                document.getElementById("image" + b).style.width = "60px";
                document.getElementById("image" + b).style.height = "60px";

            }
        });

        iconHover.addEventListener("mouseleave", function () {
            let y = this.id;
            let recupId = y.replace("icon", "");

            let iconLess1 = document.getElementById("icon" + parseInt(recupId - 1));
            let iconLess2 = document.getElementById("icon" + parseInt(recupId - 2));
            let a = parseInt(recupId) + 1;
            let b = parseInt(recupId) + 2;
            let iconAdd1 = document.getElementById("icon" + a);
            let iconAdd2 = document.getElementById("icon" + b);

            iconHover.style.transform = "scale(0.9, 0.9) translate(0, 0)";
            iconHover.style.margin = "0";
            if (iconLess1) {
                iconLess1.style.transform = "scale(0.9, 0.9) translate(0, 0)";
                iconLess1.style.padding = "0";
                document.getElementById("image" + parseInt(recupId - 1)).style.width = "80px";
                document.getElementById("image" + parseInt(recupId - 1)).style.height = "80px";

            }
            if (iconAdd1) {
                iconAdd1.style.transform = "scale(0.9, 0.9) translate(0, 0)";
                iconAdd1.style.padding = "0";
                document.getElementById("image" + a).style.width = "80px";
                document.getElementById("image" + a).style.height = "80px";

            }
            if (iconLess2) {
                iconLess2.style.transform = "scale(0.9, 0.9) translate(0, 0)";
                iconLess2.style.padding = "0";
                document.getElementById("image" + parseInt(recupId - 2)).style.width = "80px";
                document.getElementById("image" + parseInt(recupId - 2)).style.height = "80px";

            }
            if (iconAdd2) {
                iconAdd2.style.transform = "scale(0.9, 0.9) translate(0, 0)";
                iconAdd2.style.padding = "0";
                document.getElementById("image" + b).style.width = "80px";
                document.getElementById("image" + b).style.height = "80px";

            }
        });

        x++;
    }
}

function transform(id) {
    let idLogo = id;
    document.getElementById(idLogo).style.transform = "rotate(7deg)";
}