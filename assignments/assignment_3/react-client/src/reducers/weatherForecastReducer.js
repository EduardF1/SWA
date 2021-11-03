const weatherForecastReducer = (state = undefined, action) => {
    switch(action.type){
        case 'SET FORECAST':
            return state = action.payload;
        case 'RESET_FORECAST':
            return state = undefined;
        default:
            return 0;
    }
}
export default weatherForecastReducer;