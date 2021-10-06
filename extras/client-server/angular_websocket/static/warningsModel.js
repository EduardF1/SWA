const warningsModel = (warnings, minSeverityLevel) => {

    const warningsFilteredBySeverity = () => {
        return warnings.filter(warning =>  warning.prediction != null && warning.severity >= minSeverityLevel)
    }

    const updateWarning = (newWarning, severity) => {
        minSeverityLevel = severity
        warnings = warnings.filter(warning => warning.prediction != null);
        let i = warnings.findIndex(x => x.id === newWarning.id)
        if(i >= 0) {
            if (newWarning.prediction == null) {
                warnings.splice(i, 1)
            } else {
                newWarning = updateOldWarning(warnings[i], newWarning)
                warnings.splice(i, 1)
                warnings.push(newWarning)
            }
        } else {
            warnings.push(newWarning)
        }
        return warnings.filter(warning => warning.severity >= minSeverityLevel)
    }

    const updateOldWarning = (oldWarning, newWarning) => {

        let severity = "";
        let from =  "";
        let to =  "";
        let typeSpecific = "";

        if(newWarning.severity !== oldWarning.severity) {
            severity = `severity changed from ${oldWarning.severity} to ${newWarning.severity}. `;
        }
        if(newWarning.prediction.from !== oldWarning.prediction.from) {
            from = `from changed from ${oldWarning.prediction.from} to ${newWarning.prediction.from}. `
        }
        if(newWarning.prediction.to !== oldWarning.prediction.to) {
            to = `to changed from ${oldWarning.prediction.to} to ${newWarning.prediction.to}. `
        }
        if('precipitation_types' in newWarning.prediction
            && JSON.stringify(newWarning.prediction.precipitation_types) !== JSON.stringify(oldWarning.prediction.precipitation_types)) {
            typeSpecific = `precipitation types changed from ${oldWarning.prediction.precipitation_types.join(", ")} to ${newWarning.prediction.precipitation_types.join(", ")}. `
        }
        if('directions' in newWarning.prediction
            && JSON.stringify(newWarning.prediction.directions) !== JSON.stringify(oldWarning.prediction.directions)) {
            typeSpecific = `precipitation types changed from ${oldWarning.prediction.directions.join(", ")} to ${newWarning.prediction.directions.join(", ")}. `
        }

        newWarning = JSON.parse(JSON.stringify(newWarning));
        newWarning.changes = severity + from + to + typeSpecific;
        return newWarning
    }


    return {
        warnings,
        minSeverityLevel,
        warningsFilteredBySeverity,
        updateWarning
    }


}

export default warningsModel;