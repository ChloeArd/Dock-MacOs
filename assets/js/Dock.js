
export let Dock = function (x) {

    this.bottom = function () {
        let iconHover = document.getElementById("icon" + x);
        iconHover.addEventListener("mouseenter", function () {
            let y = this.id;
            let recupId = y.replace("icon", "");

            transform(recupId, iconHover, "scale(1.5, 1.5) translate(0, -50px)", "0 20px", "scale(1.3, 1.3) translate(0, -40px)", "scale(1.3, 1.3) translate(0, -20px)", "0 20px", "70px", "60px", "row");
        });

        iconHover.addEventListener("mouseleave", function () {
            let y = this.id;
            let recupId = y.replace("icon", "");

            transform(recupId, iconHover, "scale(0.9, 0.9) translate(0, 0)", "0", "scale(0.9, 0.9) translate(0, 0)", "scale(0.9, 0.9) translate(0, 0)", "0", "80px", "80px", "row");
        });
    }

    this.left = function () {
        let iconHover = document.getElementById("icon" + x);
        iconHover.addEventListener("mouseenter", function () {
            let y = this.id;
            let recupId = y.replace("icon", "");

            transform(recupId, iconHover, "scale(1.5, 1.5) translate(50px, 0)", "20px 0", "scale(1.3, 1.3) translate(40px, 0)", "scale(1.3, 1.3) translate(20px, 0)", "20px 0", "70px", "60px", "row");
        });

        iconHover.addEventListener("mouseleave", function () {
            let y = this.id;
            let recupId = y.replace("icon", "");

            transform(recupId, iconHover, "scale(0.9, 0.9) translate(0, 0)", "0", "scale(0.9, 0.9) translate(0, 0)", "scale(0.9, 0.9) translate(0, 0)", "0", "80px", "80px", "row");
        });
    }

    this.top = function () {
        let iconHover = document.getElementById("icon" + x);
        iconHover.addEventListener("mouseenter", function () {
            let y = this.id;
            let recupId = y.replace("icon", "");

            transform(recupId, iconHover, "scale(1.5, 1.5) translate(0, 50px)", "0 20px", "scale(1.3, 1.3) translate(0, 40px)", "scale(1.3, 1.3) translate(0, 20px)", "0 20px", "70px", "60px", "column-reverse");
        });

        iconHover.addEventListener("mouseleave", function () {
            let y = this.id;
            let recupId = y.replace("icon", "");

            transform(recupId, iconHover, "scale(0.9, 0.9) translate(0, 0)", "0", "scale(0.9, 0.9) translate(0, 0)", "scale(0.9, 0.9) translate(0, 0)", "0", "80px", "80px", "column-reverse");
        });
    }

    this.right = function () {
        let iconHover = document.getElementById("icon" + x);
        iconHover.addEventListener("mouseenter", function () {
            let y = this.id;
            let recupId = y.replace("icon", "");

            transform(recupId, iconHover, "scale(1.5, 1.5) translate(-50px, 0)", "20px 0", "scale(1.3, 1.3) translate(-40px, 0)", "scale(1.3, 1.3) translate(-20px, 0)", "20px 0", "70px", "60px", "row-reverse");
        });

        iconHover.addEventListener("mouseleave", function () {
            let y = this.id;
            let recupId = y.replace("icon", "");

            transform(recupId, iconHover, "scale(0.9, 0.9) translate(0, 0)", "0", "scale(0.9, 0.9) translate(0, 0)", "scale(0.9, 0.9) translate(0, 0)", "0", "80px", "80px", "row-reverse");
        });
    }
}



function transform(recupId, iconHover, transform, margin, transform1, transform2, padding, size1, size2, direction) {
    let iconLess1 = document.getElementById("icon" + parseInt(recupId - 1));
    let iconLess2 = document.getElementById("icon" + parseInt(recupId - 2));
    let a = parseInt(recupId) + 1;
    let b = parseInt(recupId) + 2;
    let iconAdd1 = document.getElementById("icon" + a);
    let iconAdd2 = document.getElementById("icon" + b);

    iconHover.style.transform = transform;
    iconHover.style.margin = margin;
    iconHover.style.transitionDuration = "0.4s";
    iconHover.style.flexDirection = direction;

    exist(iconLess1, transform1, padding, parseInt(recupId - 1), size1);
    exist(iconAdd1, transform1, padding, a, size1);
    exist(iconLess2, transform2, padding, parseInt(recupId - 2), size2);
    exist(iconAdd2, transform2, padding, b, size2);
}


function exist(id, transform, padding, b, w_h) {
    if (id) {
        id.style.transform = transform;
        id.style.padding = padding;
        id.style.transitionDuration = "0.4s";
        document.getElementById("image" + b).style.width = w_h;
        document.getElementById("image" + b).style.height = w_h;

    }
}