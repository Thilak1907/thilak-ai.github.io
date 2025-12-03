export const getAssetPath = (path) => {
    if (!path) return '';
    if (path.startsWith('http')) return path;

    const baseUrl = import.meta.env.BASE_URL;
    // Remove leading slash from path if it exists to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    // BASE_URL always ends with a slash
    return `${baseUrl}${cleanPath}`;
};
