import { IMovie } from "../../models/Movie"

const movies: IMovie[] = [{
    Title: "Neon",
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
  },{
    Title: "Sova",
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
  },{
    Title: "Sova",
    imdbID: "string",
    Type: "string",
    Poster: "string",
    Year: "string"
  },{
    Title: "Astra",
    imdbID: "string",
    Type: "string",
    Poster: "string",
    Year: "string"
}];

export const getData = async (): Promise<IMovie[]> => {
    return new Promise((res) => {
        res(movies)
    })
}