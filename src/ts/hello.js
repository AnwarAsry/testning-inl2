const movies = [{
    Title: "Chamber",
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
}];

export const movieSort = (movies, desc = true) => {
    return movies.sort((a, b) => {
      if (desc) {
        if (a.Title > b.Title) return 1;
        if (a.Title < b.Title) return -1;
  
        return 0;
      } else {
        if (a.Title > b.Title) return -1;
        if (a.Title < b.Title) return 1;
  
        return 0;
      }
    });
};

movieSort(movies, false)