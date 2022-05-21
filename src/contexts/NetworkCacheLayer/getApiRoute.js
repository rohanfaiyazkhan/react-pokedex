import { BASE_API_URL } from "./NetworkConfig";

const VALID_RESOURCE_NAMES = ["pokemon", "species"];

/**
 *
 * @param {"pokemon" | "species"} resourceName Name of resource being fetched, e.g. pokemon or species
 * @param {string | number} id (Optional) If fetching one resource, ID of said resource
 * @return {string} URL of PokeAPI route to make a GET request to
 */
export function getApiRoute(resourceName, id) {
    const isResourceUnexpected = !VALID_RESOURCE_NAMES.includes(resourceName);

    if (isResourceUnexpected) {
        throw new Error(
            `[getApiRoute]: resourceName is unexpected: ${resourceName}. Expected ${VALID_RESOURCE_NAMES.join(
                ", "
            )}`
        );
    }

    const urlArray = [BASE_API_URL];

    urlArray.push(resourceName === "species" ? "pokemon-species" : "pokemon");

    if (id !== undefined) {
        urlArray.push(id);
    }

    return urlArray.join("/");
}
