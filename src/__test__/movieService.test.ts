// import axios from "axios";
import { IMovie } from "../ts/models/Movie";
import { getData } from "../ts/services/movieService";
import axios from "axios"

// jest.mock("axios")

describe("MovieApp", () => {
    test("Axios hämtar data", async () => {
        const searchText = "star";
        let movies: IMovie[] = [];

        axios.get = jest.fn().mockImplementation(() => {
            return new Promise((resolve) => {
                resolve({
                    data: {
                        Search: [{
                            Title: "Axel",
                            imdbID: "string",
                            Type: "string",
                            Poster: "string",
                            Year: "string",
                        },
                        {
                            Title: "Dome",
                            imdbID: "string",
                            Type: "string",
                            Poster: "string",
                            Year: "string",
                        }]
                    }
                })
            })
        })

        movies = await getData(searchText);
        
        expect(movies).toHaveLength(2)
    })
    test("Axios kunde inte hämta data", async () => {
        const searchText = "star";
        let movies: IMovie[] = [];
        
        axios.get = jest.fn().mockImplementation(() => {
            return new Promise(() => {
                throw new Error("nope")
            })
        })

        movies = await getData(searchText);

        expect(movies).toHaveLength(0)
    })
    // test("getData from api", async () => {
    //     const searchText = "star";
    //     let movies: IMovie[] = []

    //     movies = await getData(searchText);

    //     expect(movies.length).toBeGreaterThan(0)
    // })
})