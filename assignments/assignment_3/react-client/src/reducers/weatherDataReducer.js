import {setHistoricData} from '../actions';
import {api} from '../utils/RestAPI'
import {getDataFromPeriod} from '../utils/Filters';

export default function weatherDataReducer (state = [], action) {
    switch(action.type){
        case 'SET_DATA':
            return action.payload;
        case 'RESET_DATA':
            return state = [];
        default:
            return state;
    }
}

//retrieve data asynchronously with REST API and calls the action for specific reducer
export function retrieveHistoricData(type,filter, startDate, endDate)
{
    //thunk function(middleware) for allowing async API calls before putting data into the store(something like callback)
    return async function fetchWeatherData(dispatch, getState){
        const data = await api.get(type)
            .then(({data}) => data)
            .catch((err) =>{
                if(err)
                {
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                    console.log(err.config);
                    console.log(err.request);
                    console.log(err.config);
                    console.log('Error', err.message);
                    console.log(err.config);
                }
            });

        //check if data comes back from server
        if(data !== undefined)
        {

            //check if filter data should be filtered after retrieving and reducer action is called
            if(!filter)
                dispatch(setHistoricData(data));
            else
            {
                dispatch(setHistoricData(getDataFromPeriod(data,startDate,endDate)));
            }

        }


    }
}

//post data asynchronously with REST API to the server
export function postHistoricData(requestType,type,value,unit,time,place, extras)
{
    //dispatch and getState parameters are neccessary for thunk middleware
    return async function postWeatherData(dispatch, getState){
        let data;
        switch(type)
        {
            case 'temperature':
            case 'cloud coverage':
            {
                data = await api.post(requestType, { value: parseInt(value), type: type, unit: unit, time: time, place: place})
                    .then(function (response) {
                        if(response.status == 201)
                        {
                            alert("Data was successfully added to server");
                        }
                        else
                        {
                            alert("Problem with adding data to server");
                        }
                    })
                    .catch(function (error) {
                        alert(error);
                    });
                break;
            }
            case 'precipitation':
            {
                data = await api.post(requestType, {value: parseInt(value), precipitation_type: extras, type: type, unit: unit, time: time, place: place})
                    .then(function (response) {
                        if(response.status == 201)
                        {
                            alert("Data was successfully added to server");
                        }
                        else
                        {
                            alert("Problem with adding data to server");
                        }
                    })
                    .catch(function (error) {
                        alert(error);
                    });
                break;
            }
            case 'wind speed':
            {
                data = await api.post(requestType, {value: parseInt(value), direction: extras, type: type, unit: unit, time: time, place: place})
                    .then(function (response) {
                        if(response.status == 201)
                        {
                            alert("Data was successfully added to server");
                        }
                        else
                        {
                            alert("Problem with adding data to server");
                        }
                    })
                    .catch(function (error) {
                        alert(error);
                    });
                break;
            }
            default:
                break;
        }


    }
}