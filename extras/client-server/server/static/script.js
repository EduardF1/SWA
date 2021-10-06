
async function init() {

    const horsens = await getGroupedDataForPlace("Horsens")
    const aarhus = await getGroupedDataForPlace("Aarhus")
    const copenhagen = await getGroupedDataForPlace("Copenhagen")
    const horsens_predictions = await getGroupedForecastDataForPlace("Horsens")
    const aarhus_predictions = await getGroupedForecastDataForPlace("Aarhus")
    const copenhagen_predictions = await getGroupedForecastDataForPlace("Copenhagen")

    const data = {
        'horsens':horsens,
        'aarhus':aarhus,
        'copenhagen':copenhagen
    }

    createTable(waetherMeasurmentsTable, createMeasurementsCell, data)
    createTable(minimumTemperatureTable, createMinMaxTempCell, data)
    createTable(totalPrecipitationTable, createPrecipitationCell, data)
    createTable(averageWindSpeedTable, createAverageWindCell, data)
    createTable(dominantWindDirectionTable, createWindDirectionCell, data)
    createTable(averageCloudCoverageTable, createCloudCoverageCell, data)
    createHourlyTable(hourlyPredictionHorsensTable, createHourlyPredictionCell, horsens_predictions)
    createHourlyTable(hourlyPredictionAarhusTable, createHourlyPredictionCell, aarhus_predictions)
    createHourlyTable(hourlyPredictionCopenhagenTable, createHourlyPredictionCell, copenhagen_predictions)
}

async function getGroupedDataForPlace(place) {
    const response = await fetch(`http://localhost:8080/data/${place}`)
    const data = await response.json();

    // Group by data type
    return data.reduce((types, entry) => {
        const type = (types[entry.type] || []);
        type.push(entry);
        types[entry.type] = type;
        return types;
    }, {});
}

async function getGroupedForecastDataForPlace(place) {
    const response = await fetch(`http://localhost:8080/forecast/${place}`)
    const data = await response.json();
    // Group by data type
    return data.reduce((types, entry) => {
        const type = (types[entry.type] || []);
        type.push(entry);
        types[entry.type] = type;
        return types;
    }, {});
}