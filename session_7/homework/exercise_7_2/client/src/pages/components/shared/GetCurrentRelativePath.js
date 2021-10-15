export function GetCurrentRelativePath(path) {
    const currentLocation = path;
    const currentLocationLength = currentLocation.length;
    return currentLocation.substr(currentLocationLength - 6);
}