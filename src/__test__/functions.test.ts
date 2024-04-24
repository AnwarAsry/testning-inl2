import { movieSort } from "../ts/functions";
import { IMovie } from "../ts/models/Movie";
import { getData } from "../ts/services/__mocks__/movieService";

jest.mock("./../ts/services/movieService.ts")

describe("Testing sort", () => {
    test("sort by title desc true", async () => {
        const movies: IMovie[] = await getData();

        const sortList = movieSort(movies)

        expect(sortList[0].Title).toBe("Astra")
        expect(sortList[1].Title).toBe("Breach")
        expect(sortList[2].Title).toBe("Neon")
        expect(sortList[3].Title).toBe("Sova")
        expect(sortList[4].Title).toBe("Sova")
        expect(sortList[5].Title).toBe("Xavier")
    })
    test("sort by title desc false", async () => {
        const movies: IMovie[] = await getData()

        const sortList = movieSort(movies, false)

        expect(sortList[0].Title).toBe("Xavier")
        expect(sortList[1].Title).toBe("Sova")
        expect(sortList[2].Title).toBe("Sova")
        expect(sortList[3].Title).toBe("Neon")
        expect(sortList[4].Title).toBe("Breach")
        expect(sortList[5].Title).toBe("Astra")
    })
})