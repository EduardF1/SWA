window.init = function() {
    const baseUrl = 'http://localhost:8080';

    Promise.all([fetch(`${baseUrl}/data`), fetch(`${baseUrl}/forecast`)])
        .then(response => response.map(response => response.json()))
        .then(response => Promise.all(response))
        .then(([data, forecast]) => {
            const weatherResponse = data
            const forecastResponse = forecast

            const latestDate = new Date(
                weatherResponse
                    .map(element => new Date(element.time))
                    .map(Date.parse) // get dates in milliseconds (used for finding the latest date)
                    .reduce((previous, current) => Math.max(previous, current))
            );
            // obtain the data for the latest (current) date
            const latestData = weatherResponse.filter(element => new Date(element.time).getTime() === latestDate.getTime());

            const weatherTableBody = document.getElementById('weather_table_body');
            latestData.map(element => {
                const row = weatherTableBody.insertRow(0);
                row.insertCell().appendChild(document.createTextNode(element.place));
                row.insertCell().appendChild(document.createTextNode(element.value));
                row.insertCell().appendChild(document.createTextNode(element.type));
                row.insertCell().appendChild(document.createTextNode(element.unit));
                row.insertCell().appendChild(document.createTextNode(element.time));
            })

            const today = new Date();
            const past5days = new Date(today.setDate(today.getDate() - 5));
            const fiveDaysData = weatherResponse.filter(element => new Date(element.time).getTime() > past5days.getTime());

            // All temperatures
            const temperatures = fiveDaysData.filter(element => element.type === 'temperature');

            // All temperatures with city key
            const temperaturesInCities = {
                'Horsens': temperatures.filter(element => element.place === 'Horsens'),
                'Aarhus': temperatures.filter(element => element.place === 'Aarhus'),
                'Copenhagen': temperatures.filter(element => element.place === 'Copenhagen'),
            }

            // All temperatures' data map
            const temperaturesLedger = {
                'Horsens': {
                    'all': temperaturesInCities['Horsens'],
                    'minimum': temperaturesInCities['Horsens'].map(element => element.value).reduce((a, b) => Math.min(a, b)),
                    'maximum': temperaturesInCities['Horsens'].map(element => element.value).reduce((a, b) => Math.max(a, b)),
                },
                'Aarhus': {
                    'all': temperaturesInCities['Aarhus'],
                    'minimum': temperaturesInCities['Aarhus'].map(element => element.value).reduce((a, b) => Math.min(a, b)),
                    'maximum': temperaturesInCities['Aarhus'].map(element => element.value).reduce((a, b) => Math.min(a, b)),
                },
                'Copenhagen': {
                    'all': temperaturesInCities['Copenhagen'],
                    'minimum': temperaturesInCities['Copenhagen'].map(element => element.value).reduce((a, b) => Math.min(a, b)),
                    'maximum': temperaturesInCities['Copenhagen'].map(element => element.value).reduce((a, b) => Math.max(a, b)),
                }
            }

            const minimumTemperatureTableBodyHorsens = document.getElementById('minimum_temperature_horsens_table_body');
            temperaturesInCities['Horsens'].filter(element => element.value === temperaturesLedger['Horsens']['minimum']).map(element => {
                const row = minimumTemperatureTableBodyHorsens.insertRow(0);
                row.insertCell().appendChild(document.createTextNode(element.place));
                row.insertCell().appendChild(document.createTextNode(element.value));
                row.insertCell().appendChild(document.createTextNode(element.type));
                row.insertCell().appendChild(document.createTextNode(element.unit));
                row.insertCell().appendChild(document.createTextNode(element.time));
            });

            const maximumTemperatureTableBodyHorsens = document.getElementById('maximum_temperature_horsens_table_body');
            temperaturesInCities['Horsens'].filter(element => element.value === temperaturesLedger['Horsens']['maximum']).map(element => {
                const row = maximumTemperatureTableBodyHorsens.insertRow(0);
                row.insertCell().appendChild(document.createTextNode(element.place));
                row.insertCell().appendChild(document.createTextNode(element.value));
                row.insertCell().appendChild(document.createTextNode(element.type));
                row.insertCell().appendChild(document.createTextNode(element.unit));
                row.insertCell().appendChild(document.createTextNode(element.time));
            });

            const minimumTemperatureTableBodyAarhus = document.getElementById('minimum_temperature_aarhus_table_body');
            temperaturesInCities['Aarhus'].filter(element => element.value === temperaturesLedger['Aarhus']['minimum']).map(element => {
                const row = minimumTemperatureTableBodyAarhus.insertRow(0);
                row.insertCell().appendChild(document.createTextNode(element.place));
                row.insertCell().appendChild(document.createTextNode(element.value));
                row.insertCell().appendChild(document.createTextNode(element.type));
                row.insertCell().appendChild(document.createTextNode(element.unit));
                row.insertCell().appendChild(document.createTextNode(element.time));
            });

            const maximumTemperatureTableBodyAarhus = document.getElementById('maximum_temperature_aarhus_table_body');
            temperaturesInCities['Aarhus'].filter(element => element.value === temperaturesLedger['Aarhus']['maximum']).map(element => {
                const row = maximumTemperatureTableBodyAarhus.insertRow(0);
                row.insertCell().appendChild(document.createTextNode(element.place));
                row.insertCell().appendChild(document.createTextNode(element.value));
                row.insertCell().appendChild(document.createTextNode(element.type));
                row.insertCell().appendChild(document.createTextNode(element.unit));
                row.insertCell().appendChild(document.createTextNode(element.time));
            });

            const minimumTemperatureTableBodyCopenhagen = document.getElementById('minimum_temperature_copenhagen_table_body');
            temperaturesInCities['Copenhagen'].filter(element => element.value === temperaturesLedger['Copenhagen']['minimum']).map(element => {
                const row = minimumTemperatureTableBodyCopenhagen.insertRow(0);
                row.insertCell().appendChild(document.createTextNode(element.place));
                row.insertCell().appendChild(document.createTextNode(element.value));
                row.insertCell().appendChild(document.createTextNode(element.type));
                row.insertCell().appendChild(document.createTextNode(element.unit));
                row.insertCell().appendChild(document.createTextNode(element.time));
            });

            const maximumTemperatureTableBodyCopenhagen = document.getElementById('maximum_temperature_copenhagen_table_body');
            temperaturesInCities['Copenhagen'].filter(element => element.value === temperaturesLedger['Copenhagen']['maximum']).map(element => {
                const row = maximumTemperatureTableBodyCopenhagen.insertRow(0);
                row.insertCell().appendChild(document.createTextNode(element.place));
                row.insertCell().appendChild(document.createTextNode(element.value));
                row.insertCell().appendChild(document.createTextNode(element.type));
                row.insertCell().appendChild(document.createTextNode(element.unit));
                row.insertCell().appendChild(document.createTextNode(element.time));
            });

            //total precipitation
            const precipitations = fiveDaysData.filter(element => element.type === 'precipitation')
            const precipitationsInCities = {
                'Horsens': precipitations.filter(element => element.place === 'Horsens'),
                'Aarhus': precipitations.filter(element => element.place === 'Aarhus'),
                'Copenhagen': precipitations.filter(element => element.place === 'Copenhagen'),
            }

            const precipitationTable = document.getElementById('precipitation_table_body');
            // Horsens
            const precipitationTableRow1 = precipitationTable.insertRow(0);
            precipitationTableRow1.insertCell().appendChild(document.createTextNode('Horsens'))
            precipitationTableRow1.insertCell().appendChild(document.createTextNode(precipitationsInCities['Horsens'].map(element => element.value).reduce((a, b) => a + b, 0)));
            // Aarhus
            const precipitationTableRow2 = precipitationTable.insertRow(1);
            precipitationTableRow2.insertCell().appendChild(document.createTextNode('Aarhus'))
            precipitationTableRow2.insertCell().appendChild(document.createTextNode(precipitationsInCities['Aarhus'].map(element => element.value).reduce((a, b) => a + b, 0)));
            // Copenhagen
            const precipitationTableRow3 = precipitationTable.insertRow(2);
            precipitationTableRow3.insertCell().appendChild(document.createTextNode('Aarhus'))
            precipitationTableRow3.insertCell().appendChild(document.createTextNode(precipitationsInCities['Aarhus'].map(element => element.value).reduce((a, b) => a + b, 0)));


            //Average wind speed
            const winds = fiveDaysData.filter(element => element.type === 'wind speed')
            const windsInCities = {
                'Horsens': winds.filter(element => element.place === 'Horsens'),
                'Aarhus': winds.filter(element => element.place === 'Aarhus'),
                'Copenhagen': winds.filter(element => element.place === 'Copenhagen')
            }

            const windSpeedTable = document.getElementById('wind_average_table_body');

            const windSpeedTableRow1 = windSpeedTable.insertRow(0);
            windSpeedTableRow1.insertCell().appendChild(document.createTextNode('Horsens'))
            windSpeedTableRow1.insertCell().appendChild(document.createTextNode(
                    Math.floor(
                        windsInCities['Horsens']
                            .map(element => element.value)
                            .reduce((a, b) => a + b, 0) / windsInCities['Horsens'].length
                    ).toString()
                )
            );
            const windSpeedTableRow2 = windSpeedTable.insertRow(1);
            windSpeedTableRow2.insertCell().appendChild(document.createTextNode('Aarhus'))
            windSpeedTableRow2.insertCell().appendChild(document.createTextNode(
                    Math.floor(
                        windsInCities['Aarhus']
                            .map(element => element.value)
                            .reduce((a, b) => a + b, 0) / windsInCities['Aarhus'].length
                    ).toString()
                )
            );
            const windSpeedTableRow3 = windSpeedTable.insertRow(2);
            windSpeedTableRow3.insertCell().appendChild(document.createTextNode('Copenhagen'))
            windSpeedTableRow3.insertCell().appendChild(document.createTextNode(
                    Math.floor(
                        windsInCities['Copenhagen']
                            .map(element => element.value)
                            .reduce((a, b) => a + b, 0) / windsInCities['Copenhagen'].length
                    ).toString()
                )
            );

            // Get the element with the highest occurrence
            function mode(arr) {
                return arr.sort((a, b) =>
                    arr.filter(v => v === a).length
                    - arr.filter(v => v === b).length
                ).pop();
            }

            const windDirectionsInCities = {
                'Horsens': windsInCities['Horsens'].map(element => element.direction),
                'Aarhus': windsInCities['Aarhus'].map(element => element.direction),
                'Copenhagen': windsInCities['Copenhagen'].map(element => element.direction)
            }

            const windDirectionsTable = document.getElementById('wind_direction_table_body');

            const windDirectionsTableRow1 = windDirectionsTable.insertRow(0);
            windDirectionsTableRow1.insertCell().appendChild(document.createTextNode('Horsens'))
            windDirectionsTableRow1.insertCell().appendChild(document.createTextNode(mode(windDirectionsInCities['Horsens'])))

            const windDirectionsTableRow2 = windDirectionsTable.insertRow(1);
            windDirectionsTableRow2.insertCell().appendChild(document.createTextNode('Aarhus'))
            windDirectionsTableRow2.insertCell().appendChild(document.createTextNode(mode(windDirectionsInCities['Aarhus'])))

            const windDirectionsTableRow3 = windDirectionsTable.insertRow(2);
            windDirectionsTableRow3.insertCell().appendChild(document.createTextNode('Copenhagen'))
            windDirectionsTableRow3.insertCell().appendChild(document.createTextNode(mode(windDirectionsInCities['Copenhagen'])))

            //Average cloud coverage
            const cloudCoverages = fiveDaysData.filter(element => element.type === 'cloud coverage')
            const cloudCoveragesInCities = {
                'Horsens': cloudCoverages.filter(element => element.place === 'Horsens'),
                'Aarhus': cloudCoverages.filter(element => element.place === 'Aarhus'),
                'Copenhagen': cloudCoverages.filter(element => element.place === 'Copenhagen'),
            }

            const averageCloudCoverageTable = document.getElementById('cloud_coverage_table_body');
            const averageCloudCoverageTableRow1 = averageCloudCoverageTable.insertRow(0);
            averageCloudCoverageTableRow1.insertCell().appendChild(document.createTextNode('Horsens'))
            averageCloudCoverageTableRow1.insertCell().appendChild(document.createTextNode(
                    Math.floor(
                        cloudCoveragesInCities['Horsens']
                            .map(element => element.value)
                            .reduce((a, b) => a + b, 0) / cloudCoveragesInCities['Horsens'].length
                    ).toString()
                )
            );

            const averageCloudCoverageTableRow2 = averageCloudCoverageTable.insertRow(1);
            averageCloudCoverageTableRow2.insertCell().appendChild(document.createTextNode('Aarhus'))
            averageCloudCoverageTableRow2.insertCell().appendChild(document.createTextNode(
                    Math.floor(
                        cloudCoveragesInCities['Aarhus']
                            .map(element => element.value)
                            .reduce((a, b) => a + b, 0) / cloudCoveragesInCities['Aarhus'].length
                    ).toString()
                )
            );

            const averageCloudCoverageTableRow3 = averageCloudCoverageTable.insertRow(2);
            averageCloudCoverageTableRow3.insertCell().appendChild(document.createTextNode('Copenhagen'))
            averageCloudCoverageTableRow3.insertCell().appendChild(document.createTextNode(
                    Math.floor(
                        cloudCoveragesInCities['Copenhagen']
                            .map(element => element.value)
                            .reduce((a, b) => a + b, 0) / cloudCoveragesInCities['Copenhagen'].length
                    ).toString()
                )
            );

            const forecastTable = document.getElementById('forecast_table_body');
            forecastResponse.sort((a, b) => a.place.localeCompare(b.place)).reverse().map(element => {
                const forecastTableRow = forecastTable.insertRow(0);
                forecastTableRow.insertCell().appendChild(document.createTextNode(element.place));
                forecastTableRow.insertCell().appendChild(document.createTextNode(element.from));
                forecastTableRow.insertCell().appendChild(document.createTextNode(element.to));
                forecastTableRow.insertCell().appendChild(document.createTextNode(element.type));
                forecastTableRow.insertCell().appendChild(document.createTextNode(element.unit));
                forecastTableRow.insertCell().appendChild(document.createTextNode(element.time));
            })
            }).catch(error => console.error(error));
}