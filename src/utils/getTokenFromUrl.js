
export function getTokenFromURL(paramName, url) {
    const urlParams = new URLSearchParams(url)
    return urlParams.get(paramName)
}