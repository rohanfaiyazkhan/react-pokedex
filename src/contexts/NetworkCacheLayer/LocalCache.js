import localforage from "localforage";
import getCurrentTimeStamp from "../../utils/getCurrentTimeStamp";
export const LOCAL_STORAGE_NETWORK_CACHE_KEY = "networkCache";

export class NetworkLocalCache {
    cache = undefined;
    fetchedOn = undefined;
    savedOn = undefined;

    load() {
        try {
            let stateFromCache = localStorage.getItem(
                LOCAL_STORAGE_NETWORK_CACHE_KEY
            );
            this.cache = stateFromCache;
            this.fetchedOn = getCurrentTimeStamp();

            return stateFromCache;
        } catch (e) {
            console.error("Unable to get network cache");
            console.error(e);
        }
    }

    save(newState) {
        try {
            let stateToSet = newState;
            if (!stateToSet) {
                stateToSet = this.cache;
            }

            localStorage.setItem(LOCAL_STORAGE_NETWORK_CACHE_KEY, stateToSet);
            this.savedOn = getCurrentTimeStamp();
        } catch (e) {
            console.error("Unable to set network cache");
            console.error(e);
        }
    }

    async asyncSave(newState) {
        try {
            let stateToSet = newState;
            if (!stateToSet) {
                stateToSet = this.cache;
            }

            await localforage.setItem(
                LOCAL_STORAGE_NETWORK_CACHE_KEY,
                stateToSet
            );
            this.savedOn = getCurrentTimeStamp();
        } catch (e) {
            console.error("Unable to set network cache");
            console.error(e);
        }
    }

    async asyncLoad() {
        try {
            let stateFromCache = await localforage.getItem(
                LOCAL_STORAGE_NETWORK_CACHE_KEY
            );
            this.cache = stateFromCache;
            this.fetchedOn = getCurrentTimeStamp();

            return stateFromCache;
        } catch (e) {
            console.error("Unable to get network cache");
            console.error(e);
        }
    }

    constructor(initialState) {
        if (!initialState) {
            this.load();
        } else {
            this.cache = initialState;
        }
    }
}
