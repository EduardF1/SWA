export const TABLE_ROW_LABELS = [
    'Time',
    'Severity',
    'From',
    'To',
    'Precipitation types',
    'Directions',
    'Type',
    'Unit',
    'Place'
];

export const apiResource = 'http://localhost:8080/warnings';
export const webSocketResource = 'ws://localhost:8090/warnings';
export const serverWarningsSinceUrl = "http://localhost:8080/warnings/since/"
export const subscribeCommand = 'subscribe';
export const unsubscribeCommand = 'unsubscribe';