import { getApiRoute } from "./getApiRoute";
/**
 *
 * @param {"pokemon" | "pokemon-species"} target
 * @param {number} id
 * @returns {Promise<Response>}
 */
export default function makeFetchRequest(target, id) {
    const route = getApiRoute(target, id);
    return fetch(route);
}
