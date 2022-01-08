const CITIES = [
    'Horsens',
    'Aarhus',
    'Copenhagen'
];
const FORECAST_ATTRIBUTES = [
    'place',
    'type',
    'unit',
    'time',
    'from',
    'to'
];
const WEATHER_DATA_ATTRIBUTES = [
    'value',
    'unit',
    'time',
    'from',
    'to'
];
const TYPES = [
    'temperature',
    'precipitation',
    'wind speed',
    'cloud coverage'
];
const VALUE_KEYS = [
    'all',
    'minimum',
    'maximum'
];
// Definition of the "init" function which is triggered instantly once the web page is loaded.
window.init = function () {
    // Create a XMLHttpRequest object. (Ref.: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
    const request = new XMLHttpRequest();
    // Base API url.
    const baseUrl = 'http://localhost:8080';
    // Retrieve the browser window object.
    const document = window.document;

    // Initialize a GET HTTP request to the "/data" API subresource.
    request.open('GET', `${baseUrl}/data`);
    // Send the request.
    request.send();

    /**
     * Helper function to build the rows (content) for several tables (all minimum and maximum tables and forecast).
     * @param tableReference (HTMLElement) The table for which the content should be built.
     * @param element (Object) The object from which the table row data is extracted.
     */
    function buildRegularTableContent(tableReference, element) {
        const row = tableReference.insertRow(0);
        Object.values(element).forEach(value => row.insertCell().appendChild(document.createTextNode(value.toString())));
    }

    /**
     * Helper function to build the rows (content) for several tables (the average cloud coverage and average wind speed).
     * @param tableReference (HTMLElement) The table for which the content should be built.
     * @param data (HashMap) The map from which the table row data is extracted for a specific city.
     */
    function buildAverageTable(tableReference, data) {
        CITIES.forEach((city, index) => {
            const row = tableReference.insertRow(index);
            row.insertCell().appendChild(document.createTextNode(city));
            row.insertCell().appendChild(document.createTextNode(
                    Math.floor(
                        data[city]
                            .map(element => element.value)
                            .reduce((a, b) => a + b, 0) / data[city].length
                    ).toString()
                )
            );
        })
    }

    /**
     * Helper function used to build the rows of the wind directions table.
     * @param tableReference (HTMLElement) The table reference.
     * @param mode (Function) Function used to determine the highest occurrence of an element.
     * @param data (Array of objects) Table data.
     */
    function buildTableWithHighestOccurrences(tableReference, mode, data) {
        CITIES.forEach((city, index) => {
            const row = tableReference.insertRow(index);
            row.insertCell().appendChild(document.createTextNode(city));
            row.insertCell().appendChild(document.createTextNode(mode(data[city])));
        });
    }

    /**
     * Helper function used to build the rows of the precipitations table.
     * @param tableReference (HTMLElement) The table reference.
     * @param data (Array of objects) Table data.
     */
    function buildPrecipitationTotalTable(tableReference, data) {
        CITIES.forEach((city, index) => {
            const row = tableReference.insertRow(index);
            row.insertCell().appendChild(document.createTextNode(city));
            row.insertCell().appendChild(document.createTextNode(data[city].map(element => element.value).reduce((a, b) => a + b, 0)));
        });
    }
    /**
     * Helper function to filter data (an array of objects) based on the value of the "place" argument.
     * @param place (String) The place for which the data should be filtered.
     * @param data (Array of objects) The data array to be filtered.
     */
    const getFilteredDataByPlace = (place, data) => data.filter(element => element.place === place);
    // Use ".onload()" to access the callback of the request (if completed successfully).
    request.onload = () => {
        // Check the request (if successful)
        if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
            // Parse the response.
            const responseData = JSON.parse(request.responseText);
            const latestDate = new Date(
                responseData
                    .map(element => new Date(element.time))
                    .map(Date.parse) // get dates in milliseconds (used for finding the latest date)
                    .reduce((previous, current) => Math.max(previous, current))
            );

            // obtain the data for the latest (current) date
            const latestData = responseData.filter(element => new Date(element.time).getTime() === latestDate.getTime());

            const weatherTableBody = document.getElementById('weather-table-body');
            latestData.filter(element => Object.keys(element).length === WEATHER_DATA_ATTRIBUTES.length).map(element => {
                buildRegularTableContent(weatherTableBody, element);
            })

            const today = new Date();
            const past5days = new Date(today.setDate(today.getDate() - 5));
            const fiveDaysData = responseData.filter(element => new Date(element.time).getTime() > past5days.getTime());

            // All temperatures
            const temperatures = fiveDaysData.filter(element => element.type === TYPES[0]);
            // All temperatures with city key
            const temperaturesInCities = {
                [CITIES[0]]: getFilteredDataByPlace(CITIES[0], temperatures),
                [CITIES[1]]: getFilteredDataByPlace(CITIES[1], temperatures),
                [CITIES[2]]: getFilteredDataByPlace(CITIES[2], temperatures),
            }

            // All temperatures' data map
            const temperaturesLedger = {
                [CITIES[0]]: {
                    [VALUE_KEYS[0]]: temperaturesInCities[CITIES[0]],
                    [VALUE_KEYS[1]]: temperaturesInCities[CITIES[0]].map(element => element.value).reduce((a, b) => Math.min(a, b)),
                    [VALUE_KEYS[2]]: temperaturesInCities[CITIES[0]].map(element => element.value).reduce((a, b) => Math.max(a, b)),
                },
                [CITIES[1]]: {
                    [VALUE_KEYS[0]]: temperaturesInCities[CITIES[1]],
                    [VALUE_KEYS[1]]: temperaturesInCities[CITIES[1]].map(element => element.value).reduce((a, b) => Math.min(a, b)),
                    [VALUE_KEYS[2]]: temperaturesInCities[CITIES[1]].map(element => element.value).reduce((a, b) => Math.min(a, b)),
                },
                [CITIES[2]]: {
                    [VALUE_KEYS[0]]: temperaturesInCities[CITIES[2]],
                    [VALUE_KEYS[1]]: temperaturesInCities[CITIES[2]].map(element => element.value).reduce((a, b) => Math.min(a, b)),
                    [VALUE_KEYS[2]]: temperaturesInCities[CITIES[2]].map(element => element.value).reduce((a, b) => Math.max(a, b)),
                }
            }

            const minimumTemperatureTableBodyHorsens = document.getElementById('minimum-temperature-horsens-table-body');
            temperaturesInCities[CITIES[0]].filter(element => element.value === temperaturesLedger[CITIES[0]][VALUE_KEYS[1]]).slice(0,1).map(element => {
                buildRegularTableContent(minimumTemperatureTableBodyHorsens, element);
            });

            const maximumTemperatureTableBodyHorsens = document.getElementById('maximum-temperature-horsens-table-body');
            temperaturesInCities[CITIES[0]].filter(element => element.value === temperaturesLedger[CITIES[0]][VALUE_KEYS[2]]).slice(0,1).map(element => {
                buildRegularTableContent(maximumTemperatureTableBodyHorsens, element);
            });

            const minimumTemperatureTableBodyAarhus = document.getElementById('minimum-temperature-aarhus-table-body');
            temperaturesInCities[CITIES[1]].filter(element => element.value === temperaturesLedger[CITIES[1]][VALUE_KEYS[1]]).slice(0,1).map(element => {
                buildRegularTableContent(minimumTemperatureTableBodyAarhus, element);
            });

            const maximumTemperatureTableBodyAarhus = document.getElementById('maximum-temperature-aarhus-table-body');
            temperaturesInCities[CITIES[1]].filter(element => element.value === temperaturesLedger[CITIES[1]][VALUE_KEYS[2]]).slice(0,1).map(element => {
                buildRegularTableContent(maximumTemperatureTableBodyAarhus, element);
            });

            const minimumTemperatureTableBodyCopenhagen = document.getElementById('minimum-temperature-copenhagen-table-body');
            temperaturesInCities[CITIES[2]].filter(element => element.value === temperaturesLedger[CITIES[2]][VALUE_KEYS[1]]).slice(0,1).map(element => {
                buildRegularTableContent(minimumTemperatureTableBodyCopenhagen, element);
            });

            const maximumTemperatureTableBodyCopenhagen = document.getElementById('maximum-temperature-copenhagen-table-body');
            temperaturesInCities[CITIES[2]].filter(element => element.value === temperaturesLedger[CITIES[2]][VALUE_KEYS[2]]).slice(0,1).map(element => {
                buildRegularTableContent(maximumTemperatureTableBodyCopenhagen, element);
            });

            //total precipitation
            const precipitations = fiveDaysData.filter(element => element.type === TYPES[1]);
            const precipitationsInCities = {
                [CITIES[0]]: getFilteredDataByPlace(CITIES[0], precipitations),
                [CITIES[1]]: getFilteredDataByPlace(CITIES[1], precipitations),
                [CITIES[2]]: getFilteredDataByPlace(CITIES[2], precipitations),
            }

            const precipitationTable = document.getElementById('precipitation-table-body');
            buildPrecipitationTotalTable(precipitationTable, precipitationsInCities);

            //Average wind speed
            const winds = fiveDaysData.filter(element => element.type === TYPES[2]);
            const windsInCities = {
                [CITIES[0]]: getFilteredDataByPlace(CITIES[0], winds),
                [CITIES[1]]: getFilteredDataByPlace(CITIES[1], winds),
                [CITIES[2]]: getFilteredDataByPlace(CITIES[2], winds),
            }

            const averageWindSpeedTable = document.getElementById('wind-average-table-body');
            buildAverageTable(averageWindSpeedTable, windsInCities);

            // Get the element with the highest occurrence
            function mode(arr) {
                return arr.sort((a, b) =>
                    arr.filter(v => v === a).length
                    - arr.filter(v => v === b).length
                ).pop();
            }

            const windDirectionsInCities = {
                [CITIES[0]]: windsInCities[CITIES[0]].map(element => element.direction),
                [CITIES[1]]: windsInCities[CITIES[1]].map(element => element.direction),
                [CITIES[2]]: windsInCities[CITIES[2]].map(element => element.direction)
            }

            const windDirectionsTable = document.getElementById('wind-direction-table-body');
            buildTableWithHighestOccurrences(windDirectionsTable, mode, windDirectionsInCities);

            //Average cloud coverage
            const cloudCoverages = fiveDaysData.filter(element => element.type === TYPES[3]);
            const cloudCoveragesInCities = {
                [CITIES[0]]: getFilteredDataByPlace(CITIES[0], cloudCoverages),
                [CITIES[1]]: getFilteredDataByPlace(CITIES[1], cloudCoverages),
                [CITIES[2]]: getFilteredDataByPlace(CITIES[2], cloudCoverages),
            }
            const averageCloudCoverageTable = document.getElementById('cloud-coverage-table-body');
            buildAverageTable(averageCloudCoverageTable, cloudCoveragesInCities);
        } else {
            throw new Error(`[${new Date().toISOString()}]: HTTP response: ${request.status} ${request.statusText}`);
        }
    }

    // Hourly predictions for the next 24 hours.
    const request_ = new XMLHttpRequest();
    request_.open('GET', `${baseUrl}/forecast`);
    request_.send();
    request_.onload = () => {
        if (request_.readyState === XMLHttpRequest.DONE && request_.status === 200) {
            const forecastTable = document.getElementById('forecast-table-body');
            const forecastData = JSON.parse(request_.responseText);
            forecastData.filter(element => Object.keys(element).length === FORECAST_ATTRIBUTES.length).sort((a, b) => a.place.localeCompare(b.place)).reverse().map(element => buildRegularTableContent(forecastTable, element));
        } else {
            throw new Error(`[${new Date().toISOString()}]: HTTP response: ${request_.status} ${request_.statusText}`);
        }
    }
}