import { movieSort } from "../ts/functions";
import { IMovie } from "../ts/models/Movie";
import { getData } from "../ts/services/__mocks__/movieService";

jest.mock("./../ts/services/movieService.ts")

describe("Testing sort", () => {
    test("sort by title desc true", async () => {
        const movies: IMovie[] = await getData();

        const sortList = movieSort(movies)

        expect(sortList).toStrictEqual([{
            Title: "Breach",
            imdbID: "string",
            Type: "string",
            Poster: "string",
            Year: "string"
          },{
            Title: "Chamber",
            imdbID: "string",
            Type: "string",
            Poster: "string",
            Year: "string"
          },{
            Title: "Neon",
            imdbID: "string",
            Type: "string",
            Poster: "string",
            Year: "string"
          },{
            Title: "Sova",
            imdbID: "string",
            Type: "string",
            Poster: "string",
            Year: "string"
          },{
            Title: "Sova",
            imdbID: "string",
            Type: "string",
            Poster: "string",
            Year: "string"
          },{
            Title: "Xavier",
            imdbID: "string",
            Type: "string",
            Poster: "string",
            Year: "string"
        }])
    })
    test("sort by title desc false", async () => {
        const movies: IMovie[] = await getData()

        const sortList = movieSort(movies, false)

        expect(sortList).toStrictEqual([{
            Title: "Xavier",
            imdbID: "string",
            Type: "string",
            Poster: "string",
            Year: "string"
          },{
            Title: "Sova",
            imdbID: "string",
            Type: "string",
            Poster: "string",
            Year: "string"
          },{
            Title: "Sova",
            imdbID: "string",
            Type: "string",
            Poster: "string",
            Year: "string"
          },{
            Title: "Neon",
            imdbID: "string",
            Type: "string",
            Poster: "string",
            Year: "string"
          },{
            Title: "Chamber",
            imdbID: "string",
            Type: "string",
            Poster: "string",
            Year: "string"
          },{
            Title: "Breach",
            imdbID: "string",
            Type: "string",
            Poster: "string",
            Year: "string"
          }])
    })
})