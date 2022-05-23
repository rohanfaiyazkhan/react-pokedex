import makeFetchRequest from "../../contexts/NetworkCacheLayer/makeFetchRequest";

describe("Mock makeFetchRequest works as expected", () => {
    fit("Expects mock makeFetchRequest to be called", async () => {
        // console.log("Mock function resolves to: ", makeFetchRequest("pokemon"));
        const res = await makeFetchRequest("pokemon", 1);
        const data = await res.json();

        expect(data.name).toBe("bulbasaur");
    });
});
