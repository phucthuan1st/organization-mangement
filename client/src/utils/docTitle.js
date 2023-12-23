const titleMap = {
    "/": "Home",
    "/dashboard": "Dashboard",
    "/home": "News Feed",
    "/signin": "Sign In",
    "/my_profile": "My Profile",
    "/official_profiles": "Official Member Profile",
    "/reserve_profiles": "Reserve Member Profile",
    "/candidates_profiles": "Candidate Profile",
    "/edit-profile": "Edit Profile",
    "/forms": "Forms",
    "/documents": "Documents",
    "/resources": "Resources",
};

/**
 * Returns the title of a page based on its route path.
 * @param {string} path - The path of the page route.
 * @returns {string} The title of the page with the site name appended.
 */
export const getTitleFromRoute = (path) => {
    // Check if the exact path exists in titleMap
    if (titleMap[path]) {
        return `$CBSV5 | {titleMap[path]}`;
    }

    // Check if any path in titleMap is a prefix of the given path
    const matchingPaths = Object.keys(titleMap).filter((key) => path.startsWith(key));

    // If there is a matching prefix, use the corresponding value
    if (matchingPaths.length > 0) {
        const longestMatchingPath = matchingPaths.reduce((a, b) => (a.length > b.length ? a : b));
        return `CBSV5 | ${titleMap[longestMatchingPath]}`;
    }

    // Default to "CBSV5" if no match is found
    return "CBSV5";
};
