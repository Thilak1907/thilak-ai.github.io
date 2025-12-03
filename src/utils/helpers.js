export const getAssetPath = (path) => {
    if (!path) return '';
    if (path.startsWith('http')) return path;

    let baseUrl = import.meta.env.BASE_URL;

    // Fallback for GitHub Pages if BASE_URL is '/' in production
    if (import.meta.env.PROD && baseUrl === '/') {
        baseUrl = '/thilak-ai.github.io/';
    }

    // Remove leading slash from path if it exists to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    // Ensure baseUrl ends with slash if it's not empty
    if (baseUrl && !baseUrl.endsWith('/')) {
        baseUrl += '/';
    }

    return `${baseUrl}${cleanPath}`;
};
