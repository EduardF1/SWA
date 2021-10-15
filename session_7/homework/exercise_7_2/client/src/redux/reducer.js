import * as actionTypes from "./actionType";

const initialState = {
    weatherData: [],
    weatherItem: {},
    loading: false
}

const weatherDataReducers = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_WEATHER_DATA:
            return {
                ...state,
                weatherData: action.payload,
                loading: false
            }
        case actionTypes.GET_WEATHER_DATA_FOR_CITY:
            return {
                ...state,
                weatherDataForCity: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

export default weatherDataReducers;