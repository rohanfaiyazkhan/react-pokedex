import { useEffect } from "react";
import {
    useNetworkCache,
    useNetworkCacheDispatch,
} from "./NetworkCacheContext";
import { NetworkCacheActions } from "./NetworkCacheActions";

/**
 *
 * @param {RequestInfo} request Fetch request parameters
 * @param {string} baseAction Base action name without success or failure, e.g. GetPokemonRequest
 */
export function useFetch(request, baseAction) {
    const dispatch = useNetworkCacheDispatch();

    dispatch({
        type: baseAction,
    });

    fetch(request)
        .then((value) => {
            console.log("Request successful", value);

            dispatch({
                type: baseAction + "Success",
                payload: {
                    data: value,
                },
            });
        })
        .catch((error) => {
            console.error("Request error: ", error);

            dispatch({
                type: baseAction + "Failure",
                payload: error,
            });
        });
}

const BASE_API_URL = "https://pokeapi.co/api/v2/";

/**
 *
 * @param {"pokemon" | "species"} resource Type of resource, either "pokemon" or "species"
 * @param {string} id
 */
export function useResource(id, resource) {
    if (resource !== "pokemon" && resource !== "species") {
        throw new Error(
            "[useResource]: Unknown value for resource. Expected 'pokemon' or 'species'"
        );
    }

    const baseActionName =
        resource === "pokemon"
            ? NetworkCacheActions.GetPokemonRequest
            : NetworkCacheActions.GetSpeciesRequest;

    const request = 
        resource === "pokemon" ?
            

    const state = useNetworkCache();

    const resourceContainer = state?.[id]?.[resource];

    if(!resourceContainer){
        useFetch()
    }
}
