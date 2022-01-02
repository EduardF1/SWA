export const REQUIREMENTS = [
    ' • display current warnings when the page load and update them without ' +
    'reloading the page when they are updated on the server.',
    ' • display changes in warnings since last update.',
    ' • allow the user to set a minimal severity level to only display some of the warnings. Don\'t reload ' +
    'the warnings when the user changes the minimal severity level.',
    ' • allow the user to complete turn off warnings. Do not receive warnings from the server while ' +
    'they are turned off, but reload them when they are turned on again.'
]
export const SEVERITIES = [
    'All severities',
    'Severity 1',
    'Severity 2',
    'Severity 3',
    'Severity 4',
    'Severity 5',
    'Severity 6',
    'Severity 7'
];

export const DEFAULT_DATE = '2021-11-01T13:00:00.000';
export const PARTS = [
    'Part 1:',
    'Part 2:',
    'Part 3:',
    'Part 4:'
];

export const LABELS = [
    'Warnings since last update: ',
    'MAIN WARNINGS SEVERITY (MIN): ',
    'Warnings ON/OFF: '
];

export const apiResource = 'http://localhost:8080/warnings';
export const webSocketResource = 'ws://localhost:8090/warnings';
export const warningsSinceUrl = "http://localhost:8080/warnings/since/"
export const subscribeCommand = 'subscribe';
export const unsubscribeCommand = 'unsubscribe';