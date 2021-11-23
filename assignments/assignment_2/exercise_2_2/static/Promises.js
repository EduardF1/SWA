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
window.init = function () {
    const baseUrl = 'http://localhost:8080';

    /**
     * Helper function to construct table row cells and append children to them.
     * @param row First table row to which the rest of the cells should be appended.
     * @param element Data element from which the text node value is provided.
     */
    const createRowCellsAndAppendChildren = (row, element) => {
        for (const elementProperty in element) {
            if(ATTRIBUTES.includes(elementProperty)) row.insertCell().appendChild(document.createTextNode(element[elementProperty]));
        }
    }

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
                .map(element => {
                const row = minimumTemperatureTableBody.insertRow(0);
                createRowCellsAndAppendChildren(row, element);
            });
        }
        const buildMaximumTable = (city) => {
            const maximumTemperatureTableBody = document.getElementById(`maximum-temperature-${city.toLowerCase()}-table-body`);
            temperaturesInCities[city]
                .filter(element => element.value === temperaturesLedger[city][MAXIMUM])
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

    Promise.all([fetch(`${baseUrl}/data`), fetch(`${baseUrl}/forecast`)])
        .then(response => response.map(response => response.json()))
        .then(response => Promise.all(response))
        .then(([data, forecast]) => {
            const weatherResponse = data;
            const forecastResponse = forecast;

            const getLatestDate = () => new Date(
                weatherResponse
                    .map(element => new Date(element.time))
                    .map(Date.parse) // get dates in milliseconds (used for finding the latest date)
                    .reduce((previous, current) => Math.max(previous, current))
            );

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
            buildTemperaturesTable(temperaturesLedger, temperaturesInCities);
            //total precipitation
            const precipitations = fiveDaysData.filter(element => element.type === 'precipitation')
            const precipitationsInCities = {
                'Horsens': precipitations.filter(element => element.place === 'Horsens'),
                'Aarhus': precipitations.filter(element => element.place === 'Aarhus'),
                'Copenhagen': precipitations.filter(element => element.place === 'Copenhagen'),
            }
            buildPrecipitationsTable(precipitationsInCities);
            //  Average wind speed
            const winds = fiveDaysData.filter(element => element.type === 'wind speed')
            const windsInCities = {
                'Horsens': winds.filter(element => element.place === 'Horsens'),
                'Aarhus': winds.filter(element => element.place === 'Aarhus'),
                'Copenhagen': winds.filter(element => element.place === 'Copenhagen')
            }
            buildWindSpeedTable(windsInCities);
            // Wind directions in cities
            const windDirectionsInCities = {
                'Horsens': windsInCities['Horsens'].map(element => element.direction),
                'Aarhus': windsInCities['Aarhus'].map(element => element.direction),
                'Copenhagen': windsInCities['Copenhagen'].map(element => element.direction)
            }
            buildWindDirectionsTable(windDirectionsInCities);
            //  Average cloud coverage
            const cloudCoverages = fiveDaysData.filter(element => element.type === 'cloud coverage');
            const cloudCoveragesInCities = {
                'Horsens': cloudCoverages.filter(element => element.place === 'Horsens'),
                'Aarhus': cloudCoverages.filter(element => element.place === 'Aarhus'),
                'Copenhagen': cloudCoverages.filter(element => element.place === 'Copenhagen'),
            }
            buildCloudCoverageTable(cloudCoveragesInCities);
            buildForecastTable(forecastResponse);
        }).catch(error => console.error(error));
}