const CITIES = [
    'Horsens',
    'Aarhus',
    'Copenhagen'
];
const MINIMUM = 'minimum';
const MAXIMUM = 'maximum';
const ATTRIBUTES = [
    'place',
    'type',
    'unit',
    'value',
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
// "insertRow()", though unrecognized is a valid JS function, ref.: https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/insertRow.
window.init = function () {
    /**
     * Api base url.
     * @type {string}
     */
    const baseUrl = 'http://localhost:8080';
    /**
     * Helper function to construct table row cells and append children to them.
     * @param row First table row to which the rest of the cells should be appended.
     * @param element Data element from which the text node value is provided.
     */
    const createRowCellsAndAppendChildren = (row, element) => {
        for (const elementProperty in element) {
            if (ATTRIBUTES.includes(elementProperty)) row.insertCell().appendChild(document.createTextNode(element[elementProperty]));
        }
    }
    /**
     * Helper function to build the rows of the Wind Or Cloud Coverage tables.
     * @param table (HTMLElement | null) The table reference.
     * @param data (Object/HashMap) The cloud coverage or wind predictions data.
     * @param city (String) The city for which the data is shown.
     * @param index (Number) The row index.
     */
    const buildCloudCoverageOrWindTableRow = (table, data, city, index) => {
        const tableRow = table.insertRow(index);
        tableRow.insertCell().appendChild(document.createTextNode(city))
        tableRow.insertCell().appendChild(document.createTextNode(
                Math.floor(
                    data[city]
                        .map(element => element.value)
                        .reduce((a, b) => a + b, 0) / data[city].length
                ).toString()
            )
        );
    }
    const buildCloudCoverageTable = (cloudCoveragesInCities) => {
        const averageCloudCoverageTable = document.getElementById('cloud-coverage-table-body');
        CITIES.forEach((city, index) => buildCloudCoverageOrWindTableRow(averageCloudCoverageTable, cloudCoveragesInCities, city, index));
    }
    const buildWindSpeedTable = (windsInCities) => {
        const windSpeedTable = document.getElementById('wind-average-table-body');
        CITIES.forEach((city, index) => buildCloudCoverageOrWindTableRow(windSpeedTable, windsInCities, city, index));
    }
    const buildForecastTable = (forecastResponse) => {
        const forecastTable = document.getElementById('forecast-table-body');
        forecastResponse.sort((a, b) => a.place.localeCompare(b.place)).reverse().map(element => {
            const forecastTableRow = forecastTable.insertRow(0);
            createRowCellsAndAppendChildren(forecastTableRow, element);
        });
    };

    function buildWindDirectionsTable(windDirectionsInCities) {
        const windDirectionsTable = document.getElementById('wind-direction-table-body');
        // Get the element with the highest occurrence
        const mode = (array) => {
            return array.sort((a, b) =>
                array.filter(v => v === a).length
                - array.filter(v => v === b).length
            ).pop();
        }
        const buildWindDirectionsTableRow = (city, index) => {
            const windDirectionsTableRow = windDirectionsTable.insertRow(index);
            windDirectionsTableRow.insertCell().appendChild(document.createTextNode(city))
            windDirectionsTableRow.insertCell().appendChild(document.createTextNode(mode(windDirectionsInCities[city])))
        }
        CITIES.forEach((city, index) => buildWindDirectionsTableRow(city, index))
    }

    const buildPrecipitationsTable = (precipitationsInCities) => {
        const precipitationTable = document.getElementById('precipitation-table-body');
        const buildPrecipitationsTableRow = (city, index) => {
            const precipitationTableRow = precipitationTable.insertRow(index);
            precipitationTableRow.insertCell().appendChild(document.createTextNode(city))
            precipitationTableRow.insertCell().appendChild(document.createTextNode(precipitationsInCities[city].map(element => element.value).reduce((a, b) => a + b, 0)));
        }
        CITIES.forEach((city, index) => buildPrecipitationsTableRow(city, index));
    }
    const buildTemperaturesTable = (temperaturesLedger, temperaturesInCities) => {
        const buildMinimumTable = (city) => {
            const minimumTemperatureTableBody = document.getElementById(`minimum-temperature-${city.toLowerCase()}-table-body`);
            temperaturesInCities[city]
                .filter(element => element.value === temperaturesLedger[city][MINIMUM])
                .slice(0,1)
                .map(element => {
                    const row = minimumTemperatureTableBody.insertRow(0);
                    createRowCellsAndAppendChildren(row, element);
                });
        }
        const buildMaximumTable = (city) => {
            const maximumTemperatureTableBody = document.getElementById(`maximum-temperature-${city.toLowerCase()}-table-body`);
            temperaturesInCities[city]
                .filter(element => element.value === temperaturesLedger[city][MAXIMUM])
                .slice(0,1)
                .map(element => {
                    const row = maximumTemperatureTableBody.insertRow(0);
                    createRowCellsAndAppendChildren(row, element);
                });
        }
        CITIES.forEach((city) => {
            buildMinimumTable(city);
            buildMaximumTable(city);
        })
    }
    /**
     * Below, "Promise.all()" is given as an argument and array of HTTP request. Thus, it create a Promise that is resolved with an
     * array of results when all the promises in the input array are resolved (or rejected when any of them is rejected). The array
     * of requests used the Fetch API's "fetch()" method (Ref.: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).
     */
    Promise.all([fetch(`${baseUrl}/data`), fetch(`${baseUrl}/forecast`)])
        // Map the Response objects to Promises that resolves to a JS object
        .then(response => response.map(response => response.json()))
        // Create a new Promise
        .then(response => Promise.all(response))
        // Access the results (data, forecast) once the promise resolves.
        .then(([data, forecast]) => {
            // Set the response data.
            const weatherResponse = data;
            const forecastResponse = forecast;
            /**
             * Helper function to get the latest measurement date.
             * @returns {Date}
             */
            const getLatestDate = () => new Date(
                weatherResponse
                    .map(element => new Date(element.time))
                    .map(Date.parse) // get dates in milliseconds (used for finding the latest date)
                    .reduce((previous, current) => Math.max(previous, current))
            );
            /**
             * Helper function to filter data (an array of objects) based on the value of the "place" argument.
             * @param place (String) The place for which the data should be filtered.
             * @param data (Array of objects) The data array to be filtered.
             */
            const getFilteredDataByPlace = (place, data) => data.filter(element => element.place === place);

            // obtain the data for the latest (current) date
            const latestData = weatherResponse.filter(element => new Date(element.time).getTime() === getLatestDate().getTime());

            const weatherTableBody = document.getElementById('weather-table-body');
            latestData.map(element => {
                const row = weatherTableBody.insertRow(0);
                createRowCellsAndAppendChildren(row, element);
            });
            const today = new Date();
            const past5days = new Date(today.setDate(today.getDate() - 5));
            const fiveDaysData = weatherResponse.filter(element => new Date(element.time).getTime() > past5days.getTime());

            // All temperatures
            const temperatures = fiveDaysData.filter(element => element.type === TYPES[0]);
            /**
             * All temperatures with city key
             * @type {{[p: string]: *}}
             */
            const temperaturesInCities = {
                [CITIES[0]]: getFilteredDataByPlace(CITIES[0], temperatures),
                [CITIES[1]]: getFilteredDataByPlace(CITIES[1], temperatures),
                [CITIES[2]]: getFilteredDataByPlace(CITIES[2], temperatures),
            }
            /**
             * All temperatures' data hashMap
             * @type {{[p: string]: {}|{}|{}}}
             */
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
            buildTemperaturesTable(temperaturesLedger, temperaturesInCities);
            // Total precipitation
            const precipitations = fiveDaysData.filter(element => element.type === TYPES[1]);
            const precipitationsInCities = {
                [CITIES[0]]: getFilteredDataByPlace(CITIES[0], precipitations),
                [CITIES[1]]: getFilteredDataByPlace(CITIES[1], precipitations),
                [CITIES[2]]: getFilteredDataByPlace(CITIES[2], precipitations),
            };
            buildPrecipitationsTable(precipitationsInCities);
            //  Average wind speed
            const winds = fiveDaysData.filter(element => element.type === TYPES[2]);
            /**
             * HashMap containing the wind data for all cities.
             * @type {{[p: string]: *}}
             */
            const windsInCities = {
                [CITIES[0]]: getFilteredDataByPlace(CITIES[0], winds),
                [CITIES[1]]: getFilteredDataByPlace(CITIES[1], winds),
                [CITIES[2]]: getFilteredDataByPlace(CITIES[2], winds),
            }
            buildWindSpeedTable(windsInCities);
            /**
             * HashMap containing the wind directions data for all cities.
             * @type {{[p: string]: *}}
             */
            const windDirectionsInCities = {
                [CITIES[0]]: windsInCities[CITIES[0]].map(element => element.direction),
                [CITIES[1]]: windsInCities[CITIES[1]].map(element => element.direction),
                [CITIES[2]]: windsInCities[CITIES[2]].map(element => element.direction)
            };
            buildWindDirectionsTable(windDirectionsInCities);
            //  Average cloud coverage
            const cloudCoverages = fiveDaysData.filter(element => element.type === TYPES[3]);
            /**
             * HashMap containing the cloud coverage data for all cities.
             * @type {{[p: string]: *}}
             */
            const cloudCoveragesInCities = {
                [CITIES[0]]: getFilteredDataByPlace(CITIES[0], cloudCoverages),
                [CITIES[1]]: getFilteredDataByPlace(CITIES[1], cloudCoverages),
                [CITIES[2]]: getFilteredDataByPlace(CITIES[2], cloudCoverages),
            };
            buildCloudCoverageTable(cloudCoveragesInCities);
            buildForecastTable(forecastResponse);
        }).catch(error => console.error(error));
}