// Actions for reducers
export const setHistoricData = (data) =>
{
    return {
        type: 'SET_DATA',
        payload: data
    };
};
export const resetHistoricData = () =>
{
    return {
        type: 'RESET_DATA'
    };
};
export const setForecastData = (data) =>
{
    return {
        type: 'SET_FORECAST',
        payload: data
    };
};
export const resetForecastData = () =>
{
    return {
        type: 'RESET_FORECAST'
    };
};