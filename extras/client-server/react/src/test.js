let data = [{"type": "temperature",
"time": "2019-07-30T10:07:00.000Z",
"place": "Aarhus",
"value": 21,
"unit": "C"},
{"type": "precipitation",
"time": "2019-07-30T10:07:00.000Z",
"place": "Aarhus",
"value": 0,
"unit": "mm",
"precipitation_type":"rain"},
{"type": "wind speed",
"time": "2019-07-30T10:07:00.000Z",
"place": "Aarhus",
"value": 2,
"unit": "m/s",
"direction": "North"},
{"type": "cloud coverage",
"time": "2019-07-30T10:07:00.000Z",
"place": "Aarhus",
"value": 100,
"unit": "%"},
{"type": "temperature",
"time": "2019-07-30T10:07:00.000Z",
"place": "Horsens",
"value": 44,
"unit": "C"}]

function getGroupedData(data) {
    // Group by data type
    return data.reduce((types, entry) => {
        const type = (types[entry.type] || []);
        type.push(entry);
        types[entry.type] = type;
        return types;
    }, {});
}

let grouped = getGroupedData(data)
console.log(grouped)