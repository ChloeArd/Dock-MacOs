import {Page} from "../Page.mjs";

describe("Test de la méthode Page", function () {

    const page = new Page();

    beforeAll(function () {
        page.title = "Netflix";
    });

    it('Vérification du titre', function () {
        expect(page.title).toBe("Netflix");
    });
});