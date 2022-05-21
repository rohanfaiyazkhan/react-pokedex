import { createContext, useContext, useReducer } from "react";
import { networkCacheReducer } from "./networkCacheReducer";

/**
 * Template of data cache. id and name are namespaces and each resource contains signalling information and the resource
 * @typedef {{
 *     [id: number]: {
 *          [name: string]: {
 *              loadingState: string,
 *              fetchedOn: number,
 *              failedOn: number,
 *              requestOn: number,
 *              resource: any
 *          }
 *      }
 * }} ResourceContainer
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

/**
 * @returns {ResourceContainer}
 */
export function useNetworkCache() {
    return useContext(NetworkCacheContext);
}

export function useNetworkCacheDispatch() {
    return useContext(NetworkCacheDispatchContext);
}
