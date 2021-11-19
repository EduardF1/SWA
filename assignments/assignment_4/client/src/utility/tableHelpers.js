export const clearTable = (tableId) => {
    // Remove all "old" warnings since last update
    const table = document.getElementById(tableId)
    for (let i = 1; i < table.rows.length;){
        table.deleteRow(i);
    }
    console.log(`${tableId} cleared`)
}

export const displayWarnings = (tableId, warnings) => {
    const table = document.getElementById(tableId)

    if (table.rows.length > 10) {
        for (let i = 1; i < table.rows.length - 1; i++) {
            table.deleteRow(i);
        }
        console.log('Cleaned up rows')
    }

    warnings.forEach(warning => {
        const row = table.insertRow();

        const timeCell = row.insertCell(0);
        const severityCell = row.insertCell(1)
        const fromCell = row.insertCell(2);
        const toCell = row.insertCell(3);
        const precipitationTypesCell = row.insertCell(4);
        const directionsCell = row.insertCell(5);
        const typeCell = row.insertCell(6);
        const unitCell = row.insertCell(7);
        const placeCell = row.insertCell(8);

        timeCell.innerHTML = warning.prediction.time;
        severityCell.innerHTML = warning.severity
        fromCell.innerHTML = warning.prediction.from
        toCell.innerHTML = warning.prediction.to
        if (warning.prediction['precipitation_types'] !== undefined) {
            precipitationTypesCell.innerHTML = warning.prediction.precipitation_types.join('\n')
        }
        if (warning.prediction['directions'] !== undefined) {
            directionsCell.innerHTML = warning.prediction.directions.join('\n')
        }
        typeCell.innerHTML = warning.prediction.type
        unitCell.innerHTML = warning.prediction.unit;
        placeCell.innerHTML = warning.prediction.place;
    })
    console.log(`Appended to ${tableId}: ${JSON.stringify(warnings)}`)
}

export const getValueFromHtmlElement = elementId => document.getElementById(elementId).value;