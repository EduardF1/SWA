const weatherDataReducer = (state = undefined, action) => {
    switch(action.type){
        case 'SET_DATA':
            return state = action.payload;
        case 'RESET_DATA':
            return state = undefined;
        default:
            return 0;
    }
}
export default weatherDataReducer;