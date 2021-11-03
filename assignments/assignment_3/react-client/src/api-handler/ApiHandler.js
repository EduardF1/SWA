import axios from 'axios';
import {useState} from "react";

// https://axios-http.com/docs/instance
const instance = axios.create({
    baseURL: 'http://localhost:8080/'
});

export function ApiHandler() {
    const [state, setState] = useState([]);

    const getData = async (type) => {
        let data = await instance.get(type)
            .then(response => {
                setState(response.data);
                console.log(state)
            }).catch(error => {
                if (error.response || error.request) {
                    console.error(error.response.data + '/n' + error.response.status + '/n' + error.request.headers + '/n' + error.request + '/n' + error.message)
                }
            });
        setState(data);
    }

    const postWeatherData = async (type, value, unit, time, place, extras) => {
        try {
            switch (type) {
                case 'temperature':
                case 'cloud coverage':
                    await instance.post('/', {
                        value: value,
                        type: type,
                        unit: unit,
                        time: time,
                        place: place
                    });
                    break;
                case 'precipitation':
                    await instance.post('/', {
                        value: value,
                        type: type,
                        unit: unit,
                        time: time,
                        place: place,
                        precipitation_type: extras
                    })
                    break;
                case 'wind speed':
                    await instance.post('/', {
                        value: value,
                        type: type,
                        unit: unit,
                        time: time,
                        place: place,
                        direction: extras
                    });
                    break;
                default:
                    break;

            }
        } catch (error) {
            console.error(error);
        }
    }
}