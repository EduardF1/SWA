import {combineReducers} from "redux";
import weatherDataReducers from "./reducer";


const rootReducer = combineReducers({
    weatherData: weatherDataReducers
})

export default rootReducer;