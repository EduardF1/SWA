const equal = require('deep-equal');

const getEqualityResult = (newWarning, oldWarning) =>
    newWarning.prediction.from === oldWarning.prediction.from && newWarning.prediction.to === oldWarning.prediction.to
    && newWarning.prediction.type === oldWarning.prediction.type && newWarning.prediction.unit === oldWarning.prediction.unit
    && newWarning.prediction.time === oldWarning.prediction.time && newWarning.prediction.place === oldWarning.prediction.place
    && equal(newWarning.prediction['precipitation_type'], oldWarning.prediction['precipitation_type']);


/**
 * Function to test the warning data array (received from the web socket) elements by the severity property
 * against the user entered severity (#severity-text-box).
 * @param warningData Initial web socket data response (array).
 * @param severity Input value entered in the #severity-text-box field.
 * @returns {*|null} The warning data array if all warnings have a severity greater or equal than the severity entered by the user. Otherwise null.
 */
export const areWarningsMatchingTheInputSeverity = (warningData, severity) =>    warningData.warnings.filter(warning => warning.severity >= severity);

export const areWarningsChangedSinceLastUpdate = (historicalWarnings, warning) =>
    !historicalWarnings.some(historicalWarning => warningEquals(historicalWarning, warning))
        ? warning
        : null

export const warningEquals = (oldWarning, newWarning) =>
    ((oldWarning === null || oldWarning['prediction'] === null) || (newWarning === null || newWarning["prediction"] === null)) ?
        getEqualityResult(newWarning, oldWarning) : false;