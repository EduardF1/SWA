let currentWarnings = [];
let previousWarnings = [];

const warningsModel = (warnings, minSeverityLevel) => {

    // check if data changed
    if (JSON.stringify(currentWarnings) !== JSON.stringify(warnings)) {
        previousWarnings = currentWarnings;
        currentWarnings = JSON.parse(JSON.stringify(warnings));
    }

    let changed = [];
    for (const warning of currentWarnings) {
        let severity = "";
        let from =  "";
        let to =  "";
        let typeSpecific = "";

        let previousWarning = previousWarnings.find(previousWarning => previousWarning.id === warning.id);
        if(previousWarning != null) {
            if(warning.severity !== previousWarning.severity) {
                // console.log(`severity changed from ${previousWarning.severity} to ${warning.severity}`)
                severity = `severity changed from ${previousWarning.severity} to ${warning.severity}. `;
            }
            if(warning.prediction.from !== previousWarning.prediction.from) {
                // console.log(`from changed from ${previousWarning.prediction.from} to ${warning.prediction.from}`)
                from = `from changed from ${previousWarning.prediction.from} to ${warning.prediction.from}. `
            }
            if(warning.prediction.to !== previousWarning.prediction.to) {
                // console.log(`to changed from ${previousWarning.prediction.to} to ${warning.prediction.to}`)
                to = `to changed from ${previousWarning.prediction.to} to ${warning.prediction.to}. `
            }
            if('precipitation_types' in warning.prediction
                && JSON.stringify(warning.prediction.precipitation_types) !== JSON.stringify(previousWarning.prediction.precipitation_types)) {
                // console.log(`precipitation_types changed from ${previousWarning.prediction.precipitation_types.join(", ")} to ${warning.prediction.precipitation_types.join(", ")}`)
                typeSpecific = `precipitation types changed from ${previousWarning.prediction.precipitation_types.join(", ")} to ${warning.prediction.precipitation_types.join(", ")}. `
            }
            if('directions' in warning.prediction
                && JSON.stringify(warning.prediction.directions) !== JSON.stringify(previousWarning.prediction.directions)) {
                // console.log(`precipitation_types changed from ${previousWarning.prediction.directions.join(", ")} to ${warning.prediction.directions.join(", ")}`)
                typeSpecific = `precipitation types changed from ${previousWarning.prediction.directions.join(", ")} to ${warning.prediction.directions.join(", ")}. `
            }
        }

        let newWarning = JSON.parse(JSON.stringify(warning));
        newWarning.changes = severity + from + to + typeSpecific;
        changed.push(newWarning);
    }

    const warningsFilteredBySeverity = () => {
        return changed.filter( warning => warning.severity >= minSeverityLevel)
    }

    return {
        changed,
        warnings,
        previousWarnings,
        minSeverityLevel,
        warningsFilteredBySeverity,
    }

}

export default warningsModel;