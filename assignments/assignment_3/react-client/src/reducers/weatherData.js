import {setHistoricData} from '../actions';
import {instance} from "../network/AxiosInstance";
import {getDataFromInterval} from "../utility/DateIntervalFilter";

export default function weatherDataReducer(state = [], action) {
    switch (action.type) {
        case 'SET_DATA':
            return action.payload;
        case 'RESET_DATA':
            return state = [];
        default:
            return state;
    }
}

//retrieve data asynchronously with REST instance and calls the action for specific reducer
export function retrieveHistoricData(type, filter, startDate, endDate) {
    //thunk function(middleware) for allowing async instance calls before putting data into the store(something like callback)
    return async function fetchWeatherData(dispatch) {
        const data = await instance.get(type)
            .then(({data}) => data)
            .catch((err) => {
                if(err.response || err.request) console.log(err.response.data + '\n' + err.response.status);
            });
        //check if data comes back from server and if it should be filtered after retrieving and reducer action is called
        if (data !== undefined) (!filter) ? dispatch(setHistoricData(data)) : dispatch(setHistoricData(getDataFromInterval(data, startDate, endDate)));
    }
}

//post data asynchronously with REST instance to the server
export function postHistoricData(requestType, type, value, unit, time, place, extras) {
    //dispatch and getState parameters are necessary for thunk middleware
    return async function postWeatherData() {
        async function sendPostRequest(requestType, payload) {
            await instance.post(requestType, {...payload})
                .then(function (response) {
                    (response.status === 201) ? alert("Data was successfully added to server") : alert("Problem with adding data to server");
                })
                .catch(function (error) {
                    alert(error);
                });
        }
        switch (type) {
            case 'temperature':
            case 'cloud coverage':
                await sendPostRequest(requestType, {value: parseInt(value), type: type, unit: unit, time: time, place: place});
                break;
            case 'precipitation':
                await sendPostRequest(requestType, {value: parseInt(value), precipitation_type: extras, type: type, unit: unit, time: time, place: place});
                break;
            case 'wind speed':
                await sendPostRequest(requestType, {value: parseInt(value), direction: extras, type: type, unit: unit, time: time, place: place})
                break;
            default:
                break;
        }
    }
}