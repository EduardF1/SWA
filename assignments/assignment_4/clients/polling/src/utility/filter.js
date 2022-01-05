// 3rd Party
const equal = require('deep-equal');

/**
 * Utility function used to assert whether a new warning (from the server) the is equal to an old warning (from the cached warnings).
 * @param oldWarning (Object) Cached (previous) warning.
 * @param newWarning (Object) Newly received warning from the server.
 * @returns {false|*}
 */
const getEqualityResult = (newWarning, oldWarning) =>
    newWarning.prediction.from === oldWarning.prediction.from && newWarning.prediction.to === oldWarning.prediction.to
    && newWarning.prediction.type === oldWarning.prediction.type && newWarning.prediction.unit === oldWarning.prediction.unit
    && newWarning.prediction.time === oldWarning.prediction.time && newWarning.prediction.place === oldWarning.prediction.place
    && (newWarning.prediction['precipitation_types'] ?
            equal(newWarning.prediction['precipitation_types'], oldWarning.prediction['precipitation_types']) :
            equal(newWarning.prediction['directions'], oldWarning.prediction['directions'])
    );
/**
 * Utility function used to filter warnings based on severity (whether their severity is greater than or equal to the user-selected severity).
 * @param warningData (Array of Objects) Array of warnings that will be filtered.
 * @param minimumSeverity (Number) User-selected severity.
 */
export const filterBySeverity = (warningData, minimumSeverity) => warningData.warnings.filter(warning => warning.severity >= minimumSeverity);
/**
 * Utility function used to filter warnings since the last server update.
 * @param oldWarnings (Array of Objects) Array of cached (previous) warnings.
 * @param newWarnings (Array of Objects) Array of newly received warnings from the server.
 */
export const filterSinceLastUpdate = (oldWarnings, newWarnings) => newWarnings.filter(newWarning => !oldWarnings.some(oldWarning => getEqualityResult(newWarning, oldWarning)));