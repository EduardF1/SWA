export const baseURL = 'http://localhost:5050/';
export const NEW_LINE = '\n';
export const NOT_APPLICABLE = '-';

export const CITIES = [
    'Horsens',
    'Aarhus',
    'Copenhagen'
];

export const API_RESOURCES = [
    'data',
    'forecast'
];

export const RELOAD_DATA_BUTTON_LABEL = 'Reload data';
export const HEADER_LABEL = 'Weather Forecast and Weather History';

export const DEFAULT_FILTER_VALUES = [
    false,
    null,
    null
];

export const TABLE_HEADER_LABELS = [
    'Type',
    'Unit',
    'Date',
    'Place',
    'Precipitation Types',
    'Wind Directions'
];
export const VALUE_LABEL = 'Value';
export const FROM_AND_TO_LABELS = [
    'From',
    'To'
];

export const WIND_DIRECTION_OPTIONS = [
    NOT_APPLICABLE,
    'West',
    'East',
    'South',
    'North',
    'Southeast',
    'Northeast',
    'Southwest',
    'Northwest'
];


export const DATA_TYPES = [
    'temperature',
    'cloud coverage',
    'precipitation',
    'wind speed'
];

export const UNIT_TYPE_OPTIONS = [
    '°C',
    'F',
    'km/h',
    'm/s',
    '%',
    'mm',
    'inch'
];

export const MODAL_OPEN_BUTTON_LABEL = "Post History Data";
export const MODAL_TITLE_LABEL = 'Add new weather data';

export const INITIAL_POST_WEATHER_DATA_MODAL_VALUES = {
    show: false,
    type: DATA_TYPES[0],
    unit: UNIT_TYPE_OPTIONS[0],
    place: CITIES[0],
    value: 0,
    precipitationType: NOT_APPLICABLE,
    direction: NOT_APPLICABLE
}

export const PRECIPITATION_TYPE_OPTIONS = [
    NOT_APPLICABLE,
    'rain',
    'snow',
    'sleet',
    'hail'
];

export const FORM_GROUP_LABELS = {
    'WIND_DIRECTION_LABEL': 'Wind Direction',
    'UNIT_LABEL': 'Select unit for data',
    'DATA_TYPE_LABEL': 'Select type of data',
    'PLACE_LABEL': 'Select Place (City)',
    'PRECIPITATION_TYPE_LABEL': 'Select type (Only for the precipitation type of data)',
    'DATE_TIME_LABEL': 'Set time of measurement:',
    'VALUE_LABEL': 'Enter value'
}

export const FOOTER_LABELS = [
    'Close',
    'Add value'
];

export const CARD_LABELS = [
    'Showing Weather History for',
    'Showing Weather Forecast For'
];

export const TOGGLE_BUTTONS_CARD_LABELS = [
    'SEE WEATHER FORECAST',
    'SEE WEATHER HISTORY'
];

export const FILTER_BUTTONS_CONTAINER_LABELS = [
    'Apply filter',
    'Reset filter'
];

export const FILTER_LABELS = [
  'Set start date:',
  'Set end date:'
];

export const REQUEST_ALERTS = [
  'Data was successfully added to server',
  'An error occurred while trying to post data to the server.'
];

export const IDENTIFIERS = [
    'History',
    'Forecast'
]