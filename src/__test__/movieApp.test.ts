import { IMovie } from "../ts/models/Movie";
import { handleSubmit } from "../ts/movieApp";
import * as HtmlFunctions from "./../ts/htmlFunctions";
import * as movieServiceFunc from "./../ts/services/movieService";

describe("handleSubmit", () => {

    let mockedCreateHtml: jest.SpyInstance<void>;
    let mockedDisplayNoResult: jest.SpyInstance<void>;
    let mockedGetData: jest.SpyInstance<Promise<IMovie[]>>;

    beforeEach(() => {
        mockedCreateHtml = jest.spyOn(HtmlFunctions, "createHtml")
        mockedDisplayNoResult = jest.spyOn(HtmlFunctions, "displayNoResult")
        mockedGetData = jest.spyOn(movieServiceFunc, "getData")
    })
    afterEach(() => {
        mockedCreateHtml.mockReset()
        mockedDisplayNoResult.mockReset()
        mockedGetData.mockReset()
    })

    test("call for createHtml inside try", async () => {
        document.body.innerHTML = `
            <div id="movie-container">
                <input id="searchText" type="text" value="hej">
            </div>
        `;
        
        mockedGetData.mockImplementation(async (): Promise<IMovie[]> => {
            return new Promise((resolve) => { resolve([{
                Title: "Dome",
                imdbID: "string",
                Type: "string",
                Poster: "string",
                Year: "string"
              },{
                Title: "Axel",
                imdbID: "string",
                Type: "string",
                Poster: "string",
                Year: "string"
            }])})
        })

        await handleSubmit();

        expect(mockedCreateHtml).toHaveBeenCalled()
    })
    test("call for displayNoResult inside try", async () => {
        document.body.innerHTML = `
            <div id="movie-container">
                <input id="searchText" type="text" value="hej">
            </div>
        `;
        
        mockedGetData.mockImplementation(async (): Promise<IMovie[]> => {
            return new Promise((resolve) => { resolve([])})
        })

        await handleSubmit();

        expect(mockedDisplayNoResult).toHaveBeenCalled()
    })
    test("call for displayNoResult inside catch", async () => {
        document.body.innerHTML = `
            <div id="movie-container">
                <input id="searchText" type="text" value="hej">
            </div>
        `;
        
        mockedGetData.mockImplementation(async (): Promise<IMovie[]> => {
            return new Promise(() => { throw new Error('nope') })
        })

        await handleSubmit();

        expect(mockedDisplayNoResult).toHaveBeenCalled()
    })
})