import { rest } from "msw";
import { getApiRoute } from "../../contexts/NetworkCacheLayer/getApiRoute";
import { mockPokemonResponse } from "./pokemon.mock";
import mockSpeciesResponse from "./species.mock";

const pokemonRoute = getApiRoute("pokemon");
const speciesRoute = getApiRoute("species");

export const handlers = [
    rest.get(pokemonRoute + "/:id", (req, res, ctx) => {
        return res(ctx.json(mockPokemonResponse));
    }),
    rest.get(speciesRoute + "/:id", (req, res, ctx) => {
        return res(ctx.json(mockSpeciesResponse));
    }),
];
