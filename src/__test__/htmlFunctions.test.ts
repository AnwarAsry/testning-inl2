import { createHtml, displayNoResult } from "../ts/htmlFunctions";
import { IMovie } from "../ts/models/Movie";

import { getData } from "../ts/services/__mocks__/movieService";

jest.mock("./../ts/services/movieService.ts")

describe("htmlFunctions", () => {

    test("displayNoResult", () => {
        document.body.innerHTML = `
            <div id="container"></div>
        `;
        const cont = document.getElementById("container") as HTMLDivElement;
        
        displayNoResult(cont)

        const ptag = document.querySelectorAll("p");
        
        expect(ptag).toHaveLength(1)
    })
    test("createHtml", async () => {
        document.body.innerHTML = `
            <div id="container"></div>
        `;
        const movies: IMovie[] = await getData();
        const moviesCont = document.getElementById("container") as HTMLDivElement;

        createHtml(movies, moviesCont);

        const movieDivs = document.getElementsByClassName("movie")

        expect(movieDivs).toHaveLength(6)
    })
})