import { useCallback, useEffect } from "react";
import {
    useNetworkCache,
    useNetworkCacheDispatch,
} from "./NetworkCacheContext";
import { NetworkCacheActions } from "./NetworkCacheActions";
import { getApiRoute } from "./getApiRoute";
import { StalenessTimeoutMs } from "./NetworkConfig";
import { LoadingStates } from "../../data/LoadingStates";
import getCurrentTimeStamp from "../../utils/getCurrentTimeStamp";
import makeFetchRequest from "./makeFetchRequest";

/**
 * @param {"pokemon" | "species"} resource Type of resource, either "pokemon" or "species"
 * @param {number} id ID of pokemon to be fetched
 */
export function useResourceFetchCallback(resource, id) {
    const dispatch = useNetworkCacheDispatch();
    const baseActionName =
        resource === "pokemon"
            ? NetworkCacheActions.GetPokemonRequest
            : NetworkCacheActions.GetSpeciesRequest;

    return useCallback(() => {
        dispatch({
            type: baseActionName,
        });

        makeFetchRequest(resource, id)
            .then((value) => value.json())
            .then((data) => {
                console.log("Request successful", data);

                dispatch({
                    type: baseActionName + "Success",
                    payload: {
                        data,
                    },
                });
            })
            .catch((error) => {
                console.error("Request error: ", error);

                dispatch({
                    type: baseActionName + "Failure",
                    payload: error,
                });
            });
    }, [baseActionName, dispatch, id, resource]);
}

/**
 * Asserts that something is either a number or empty. Useful for ensuring timestamps did not get parsed as strings
 * @template T
 * @param {T} input
 * @param {string} name Name of variable provided as input (for logging)
 * @param {string} context Name of context
 * @returns {asserts T is number | undefined}
 */
function assertNumberIfNotEmpty(input, name, context = "useResource") {
    if (input !== undefined && typeof input !== "number") {
        throw new Error(
            `[${context}]: Unexpected type of ${name}. Expected number but found ${typeof input}`
        );
    }
}

/**
 * @param {"pokemon" | "species"} resource Type of resource, either "pokemon" or "species"
 * @param {number} id ID of pokemon to be fetched
 */
export default function useCachedResource(
    resource,
    id,
    cacheDuration = StalenessTimeoutMs.DEFAULT
) {
    if (resource !== "pokemon" && resource !== "species") {
        throw new Error(
            "[useResource]: Unknown value for resource. Expected 'pokemon' or 'species'"
        );
    }

    const state = useNetworkCache();

    const resourceContainer = state?.[id]?.[resource];
    const isResourceEmpty =
        resourceContainer === undefined ||
        resourceContainer.resource === undefined;
    const loadingState = resourceContainer?.loadingState;
    const fetchedOn = resourceContainer?.fetchedOn;
    const requestOn = resourceContainer?.requestOn;
    const resourceFetchCallback = useResourceFetchCallback(resource, id);

    assertNumberIfNotEmpty(fetchedOn, "fetchedOn");
    assertNumberIfNotEmpty(requestOn, "requestOn");

    useEffect(() => {
        if (
            isResourceEmpty &&
            loadingState !== LoadingStates.Loading &&
            requestOn === undefined
        ) {
            resourceFetchCallback();
            return;
        }

        const currentTime = getCurrentTimeStamp();
        const isCacheStale =
            currentTime - Math.max([requestOn, fetchedOn]) > cacheDuration;

        if (loadingState !== LoadingStates.Loading && isCacheStale) {
            resourceFetchCallback();
            return;
        }
    }, [
        cacheDuration,
        fetchedOn,
        isResourceEmpty,
        loadingState,
        requestOn,
        resourceFetchCallback,
    ]);

    return resourceContainer;
}
