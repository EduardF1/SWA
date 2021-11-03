import axios from 'axios';

// https://axios-http.com/docs/instance
const instance = axios.create({
    baseURL: 'http://localhost:8080/'
});


    export const getData = async (type) => {
        let data = await instance.get(type)
            .then(response => response.data)
            .catch(error => {
                if (error.response || error.request) {
                    console.error(error.response.data + '/n' + error.response.status + '/n' + error.request.headers + '/n' + error.request + '/n' + error.message)
                }
            });
        return data;
    }

    export const postWeatherData = async (type, value, unit, time, place, extras) => {
        let response;
        switch(type)
        {
            case 'temperature':
            case 'cloud coverage':
            {
                response = await instance.post('/', { value: value, type: type, unit: unit, time: time, place: place})
                    .then(response => response)
                    .catch( (error) => error);
                break;
            }
            case 'precipitation':
            {
                response = await instance.post('/', {value: value, precipitation_type: extras, type: type, unit: unit, time: time, place: place})
                    .then(response => response)
                    .catch( (error) => error);
                break;
            }
            case 'wind speed':
                response = await instance.post('/', {value: value, direction: extras, type: type, unit: unit, time: time, place: place})
                    .then(response => response)
                    .catch( (error) => error);
                break;
            default:
                console.log("Unrecognized type.");
                break;
        }
        return response;
}