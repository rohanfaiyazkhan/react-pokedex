import { createContext, useContext, useReducer } from "react";
import { networkCacheReducer } from "./networkCacheReducer";

/**
 * Should have probably used Typescript for this project but ahh well
 * Here is the type I am expecting for this context
 * {
 *      [id]: {
 *          pokemon: {
 *              resource: {...},
 *              loadingState: LoadingStates,
 *              fetchedOn: number,
 *              failedOn: number,
 *              requestOn: number
 *          },
 *          species: {
 *              ...same as pokemon
 *          }
 *      }
 * }
 */

const initialState = {};
const NetworkCacheContext = createContext(initialState);
const NetworkCacheDispatchContext = createContext();

export function NetworkCacheContextWrapper(props) {
    const [state, dispatch] = useReducer(networkCacheReducer, initialState);

    return (
        <NetworkCacheContext.Provider value={state}>
            <NetworkCacheDispatchContext.Provider value={dispatch}>
                {props.children}
            </NetworkCacheDispatchContext.Provider>
        </NetworkCacheContext.Provider>
    );
}

export function useNetworkCache() {
    return useContext(NetworkCacheContext);
}

export function useNetworkCacheDispatch() {
    return useContext(NetworkCacheDispatchContext);
}
