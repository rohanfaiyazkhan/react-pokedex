import { NetworkCacheActions } from "./NetworkCacheActions";
import getCurrentTimeStamp from "./../../utils/getCurrentTimeStamp";
import { LoadingStates } from "./../../data/LoadingStates";

export function networkCacheReducer(state, action) {
    console.debug("[networkCacheReducer -> action recieved]: ", action);

    let id = action?.payload?.id;

    if (!id) {
        throw new Error("[networkCacheReducer]: id is unknown");
    }

    const timestamp = getCurrentTimeStamp();

    switch (action.type) {
        case NetworkCacheActions.GetPokemonRequest:
            return {
                ...state,
                [id]: {
                    ...state?.[id],
                    pokemon: {
                        ...state?.[id]?.pokemon,
                        requestOn: timestamp,
                        loadingState: LoadingStates.Loading,
                    },
                },
            };
        case NetworkCacheActions.GetPokemonRequestSuccess:
            if (!action?.payload?.data) {
                console.error(
                    "[useNetworkReducer.GetPokemonRequestSuccess]: data is missing"
                );
                console.error(action.payload);
            }

            return {
                ...state,
                [id]: {
                    ...state?.[id],
                    pokemon: {
                        ...state?.[id]?.pokemon,
                        fetchedOn: timestamp,
                        loadingState: LoadingStates.Success,
                        resource: action?.payload?.data,
                    },
                },
            };
        case NetworkCacheActions.GetPokemonRequestFailure:
            return {
                ...state,
                [id]: {
                    ...state?.[id],
                    pokemon: {
                        ...state?.[id]?.pokemon,
                        failedOn: timestamp,
                        loadingState: LoadingStates.Fail,
                        error: action?.payload?.error,
                    },
                },
            };
        case NetworkCacheActions.GetSpeciesRequest:
            return {
                ...state,
                [id]: {
                    ...state?.[id],
                    species: {
                        ...state?.[id]?.species,
                        requestOn: timestamp,
                        loadingState: LoadingStates.Loading,
                    },
                },
            };
        case NetworkCacheActions.GetSpeciesRequestSuccess:
            if (!action?.payload?.data) {
                console.error(
                    "[useNetworkReducer.GetSpeciesRequestSuccess]: data is missing"
                );
                console.error(action.payload);
            }

            return {
                ...state,
                [id]: {
                    ...state?.[id],
                    species: {
                        ...state?.[id]?.species,
                        fetchedOn: timestamp,
                        loadingState: LoadingStates.Success,
                        resource: action?.payload?.data,
                    },
                },
            };
        case NetworkCacheActions.GetSpeciesRequestFailure:
            return {
                ...state,
                [id]: {
                    ...state?.[id],
                    species: {
                        ...state?.[id]?.species,
                        failedOn: timestamp,
                        loadingState: LoadingStates.Fail,
                        error: action?.payload?.error,
                    },
                },
            };

        default:
            return state;
    }
}
