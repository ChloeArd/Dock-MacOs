import {logo} from "./Icon";
import {Icon} from "./Icon";

export let Page = function (title) {

    this.title = title;

    this.open = function () {
        let navigator = document.createElement("div");
        navigator.id = "navigator";
        document.body.prepend(navigator);

        let top = document.createElement("div");
        top.id = "top";
        navigator.append(top);

        let red = document.createElement("span");
        red.id = "red";
        top.append(red);

        let orange = document.createElement("span");
        orange.id = "orange";
        top.append(orange);

        let green = document.createElement("span");
        green.id = "green";
        top.append(green);

        let title = document.createElement("span");
        title.id = "title";
        title.innerHTML = this.title;
        top.append(title);

    }

    this.add = function () {

        let navigator = document.createElement("div");
        navigator.id = "navigator2";
        document.body.prepend(navigator);

        let top = document.createElement("div");
        top.id = "top";
        navigator.append(top);

        let red = document.createElement("span");
        red.id = "red2";
        top.append(red);

        let orange = document.createElement("span");
        orange.id = "orange";
        top.append(orange);

        let green = document.createElement("span");
        green.id = "green";
        top.append(green);

        let title = document.createElement("span");
        title.id = "title";
        title.innerHTML = "Ajout";
        top.append(title);

        let inputImage = document.createElement("input");
        inputImage.type = "url";
        inputImage.placeholder = "Image";
        inputImage.id = "inputImage";
        navigator.append(inputImage);

        let inputLink = document.createElement("input");
        inputLink.type = "url";
        inputLink.placeholder = "Lien";
        inputLink.id = "inputLink";
        navigator.append(inputLink);

        let inputTitle = document.createElement("input");
        inputTitle.type = "text";
        inputTitle.placeholder = "Titre";
        inputTitle.id = "inputTitle";
        navigator.append(inputTitle);

        let inputAdd = document.createElement("input");
        inputAdd.type = "submit";
        inputAdd.value = "Ajouter";
        inputAdd.id = "inputAdd";
        navigator.append(inputAdd);

        document.getElementById("inputAdd").addEventListener("click", function () {
            let image = document.getElementById("inputImage").value;
            let link = document.getElementById("inputLink").value;
            let title = document.getElementById("inputTitle").value;

            if (image !== "" && link !== "" && title !== "") {
                logo.push({logo: image, link: link, title: title});

                let icon = new Icon();
                icon.create();

                document.getElementById("inputImage").value = "";
                document.getElementById("inputLink").value = "";
                document.getElementById("inputTitle").value = "";
            }
        })
    }
}