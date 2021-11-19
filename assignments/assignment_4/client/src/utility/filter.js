const equal = require('deep-equal');
export const filterBySeverity = (warningData, minimumSeverity) => warningData.warnings.filter(warning => warning.severity >= minimumSeverity);

export const filterSinceLastUpdate = (oldWarnings, newWarnings) => {
    const getEqualityResult = (newWarning, oldWarning) =>
        newWarning.prediction.from === oldWarning.prediction.from && newWarning.prediction.to === oldWarning.prediction.to
        && newWarning.prediction.type === oldWarning.prediction.type && newWarning.prediction.unit === oldWarning.prediction.unit
        && newWarning.prediction.time === oldWarning.prediction.time && newWarning.prediction.place === oldWarning.prediction.place
        && equal(newWarning.prediction['precipitation_type'], oldWarning.prediction['precipitation_type']);
    return newWarnings.filter(newWarning => !oldWarnings.some(oldWarning => getEqualityResult(newWarning, oldWarning)));
}