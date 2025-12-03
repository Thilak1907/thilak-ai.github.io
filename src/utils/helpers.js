export const getAssetPath = (path) => {
    if (!path) return '';
    if (path.startsWith('http')) return path;

    let baseUrl = import.meta.env.BASE_URL;

    // Remove leading slash from path if it exists to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    // Ensure baseUrl ends with slash if it's not empty
    if (baseUrl && !baseUrl.endsWith('/')) {
        baseUrl += '/';
    }

    return `${baseUrl}${cleanPath}`;
};
