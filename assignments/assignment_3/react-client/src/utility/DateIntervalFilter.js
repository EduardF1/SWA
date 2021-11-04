/**
 * Utility function for filtering the response data array based on startDate and endDate.
 * @param data array of objects to be filtered.
 * @param startDate lower bound of the date interval.
 * @param endDate upper bound of the date interval.
 * @returns {array} An array of filtered elements based on the date interval.
 */
export const getDataFromInterval = (data, startDate, endDate) =>
    data.filter(element =>
        (new Date(element.time)) >= new Date(startDate) &&
        (new Date(element.time)) <= new Date(endDate)
    );