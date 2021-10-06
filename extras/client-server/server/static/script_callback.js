
function init() {
    let horsens
    let aarhus
    let copenhagen

    const request = new XMLHttpRequest();
    request.open('GET', `http://localhost:8080/data/Horsens`)
    request.send()
    request.onload = () => {
        horsens = JSON.parse(request.responseText)
        horsens = groupDataByType(horsens)
        request.open('GET', `http://localhost:8080/data/Aarhus`)
        request.send()
        request.onload = () => {
            aarhus = JSON.parse(request.responseText)
            aarhus = groupDataByType(aarhus)
            request.open('GET', `http://localhost:8080/data/Copenhagen`)
            request.send()
            request.onload = () => {
                copenhagen = JSON.parse(request.responseText)
                copenhagen = groupDataByType(copenhagen)
                const data = {
                    'horsens': horsens,
                    'aarhus': aarhus,
                    'copenhagen': copenhagen
                }
                createTable(waetherMeasurmentsTable, createMeasurementsCell, data)
                createTable(minimumTemperatureTable, createMinMaxTempCell, data)
                createTable(totalPrecipitationTable, createPrecipitationCell, data)
                createTable(averageWindSpeedTable, createAverageWindCell, data)
                createTable(dominantWindDirectionTable, createWindDirectionCell, data)
                createTable(averageCloudCoverageTable, createCloudCoverageCell, data)

                request.open('GET', `http://localhost:8080/forecast/Horsens`)
                request.send()
                request.onload = () => {
                    let horsens_predictions = JSON.parse(request.responseText)
                    horsens_predictions = groupDataByType(horsens_predictions);
                    createHourlyTable(hourlyPredictionHorsensTable, createHourlyPredictionCell, horsens_predictions)
                    request.open('GET', `http://localhost:8080/forecast/Aarhus`)
                    request.send()
                    request.onload = () => {
                        let aarhus_predictions = JSON.parse(request.responseText)
                        aarhus_predictions = groupDataByType(aarhus_predictions);
                        createHourlyTable(hourlyPredictionAarhusTable, createHourlyPredictionCell, aarhus_predictions)
                        request.open('GET', `http://localhost:8080/forecast/Copenhagen`)
                        request.send()
                        request.onload = () => {
                            let copenhagen_predictions = JSON.parse(request.responseText)
                            copenhagen_predictions = groupDataByType(copenhagen_predictions);
                            createHourlyTable(hourlyPredictionCopenhagenTable, createHourlyPredictionCell, copenhagen_predictions)
                        }
                    }
                }
            }
        }
    }
}

function groupDataByType(data) {
    // Group by data type
    return data.reduce((types, entry) => {
        const type = (types[entry.type] || [])
        type.push(entry)
        types[entry.type] = type
        return types
    }, {});
}

