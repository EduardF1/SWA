/*
    *   Actions of the reducers *
    *   The "type" property represents the unique action name. The first part of the
    *   name indicates the verb (action) and the second the subject (what), together
    *   forming a readable identifier (unique).
 */
/**
 * Action function for updating the state with "data", sets the historic data.
 * @param data Data to update the state with.
 * @returns {
 *              {   payload,
 *                  type: string
 *               }
 *          }
 */
export const setHistoricData = (data) =>
{
    return {
        type: 'SET_DATA',
        payload: data
    };
};
/**
 * Action function for resetting the state for the historic data.
 * @returns {
 *              {
 *                  type: string
 *              }
 *          }
 */
export const resetHistoricData = () =>
{
    return {
        type: 'RESET_DATA'
    };
};
/**
 * Action function for updating the state with "data", sets the forecast data.
 * @param data Data to update the state with.
 * @returns {
 *              {   payload,
 *                  type: string
 *               }
 *          }
 */
export const setForecastData = (data) =>
{
    return {
        type: 'SET_FORECAST',
        payload: data
    };
};
/**
 * Action function for resetting the state for the forecast data.
 * @returns {
 *              {
 *                  type: string
 *              }
 *          }
 */
export const resetForecastData = () =>
{
    return {
        type: 'RESET_FORECAST'
    };
};