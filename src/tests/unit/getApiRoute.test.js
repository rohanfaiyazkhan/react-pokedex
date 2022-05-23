import { getApiRoute } from "./../../contexts/NetworkCacheLayer/getApiRoute";

describe("Checks that getApiRoute works as expected", () => {
    it("Checks that the pokemon with id of 0 returns correct route", () => {
        const route = getApiRoute("pokemon", 0);
        expect(route).toBe("https://pokeapi.co/api/v2/pokemon/0");
    });

    it("Checks that the pokemon species with id of 0 returns correct route", () => {
        const route = getApiRoute("species", 0);
        expect(route).toBe("https://pokeapi.co/api/v2/pokemon-species/0");
    });
});
