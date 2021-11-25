let x = 0;
let logo = [{ logo:"https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg", link:"https://github.com", title: "GitHub"}];


export let Icon = function () {

    this.create = function () {
        let icon = document.createElement("a");
        icon.id = "icon" + x;
        icon.className = "icon tooltip";
        icon.href = logo[0]['link'];
        document.getElementById("dock").append(icon);

        let image = document.createElement("img");
        image.src = logo[0]['logo'];
        image.alt = logo[0]['title'];
        image.id = 'image' + x;
        icon.append(image);

        let tooltip = document.createElement("span");
        tooltip.className = "tooltiptext";
        tooltip.innerHTML = logo[0]['title'];
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
                iconLess1.style.margin = "0 20px";
            }
            if (iconAdd1) {
                iconAdd1.style.transform = "scale(1.3, 1.3) translate(0, -40px)";
                iconAdd1.style.margin = "0 20px";
            }
            if (iconLess2) {
                iconLess2.style.transform = "scale(1.1, 1.1) translate(0, -20px)";
                iconLess2.style.margin = "0 20px";
            }
            if (iconAdd2) {
                iconAdd2.style.transform = "scale(1.1, 1.1) translate(0, -20px)";
                iconAdd2.style.margin = "0 20px";
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
                iconLess1.style.margin = "0";
            }
            if (iconAdd1) {
                iconAdd1.style.transform = "scale(0.9, 0.9) translate(0, 0)";
                iconAdd1.style.margin = "0";
            }
            if (iconLess2) {
                iconLess1.style.transform = "scale(0.9, 0.9) translate(0, 0)";
                iconLess1.style.margin = "0";
            }
            if (iconAdd2) {
                iconAdd1.style.transform = "scale(0.9, 0.9) translate(0, 0)";
                iconAdd1.style.margin = "0";
            }
        });

        x++;
    }
}

function transform(id) {
    let idLogo = id;
    document.getElementById(idLogo).style.transform = "rotate(7deg)";
}