const model = (place,
               temperature,
               precipitation,
               wind,
               cloud,
               temperaturePrediction,
               precipitationPrediction,
               windPrediction,
               cloudPrediction
) => {

    const all = () => model(
        place,
        temperature,
        precipitation,
        wind,
        cloud,
        temperaturePrediction,
        precipitationPrediction,
        windPrediction,
        cloudPrediction
    )

    const lastMeasurement = {
        temperature: temperature[temperature.length - 1],
        precipitation: precipitation[precipitation.length - 1],
        wind: wind[wind.length - 1],
        cloud: cloud[cloud.length - 1],
    }

    const getHistoryMeasurements = (intervalStart, intervalEnd) => {
        let result = []
        /*
        * considering that all data has same length
        * */
        for (let i = 0; i < temperature.length; i++) {
            if (intervalStart != null && intervalEnd != null) {
                let date = new Date(temperature[i].time)
                /* set hour because of different timezone */
                date.setHours(date.getHours() - 1)
                if (date >= intervalStart && date <= intervalEnd) {
                    result.push({
                        temperature: temperature[i],
                        precipitation: precipitation[i],
                        wind: wind[i],
                        cloud: cloud[i],
                    })
                }
            }
        }
        return result
    }

    const getMinimumTemperature = () => {
        return Math.min(...temperature.slice(-5 * 24).map(entry => entry.value))
    }

    const getMaximumTemperature = () => {
        return Math.max(...temperature.slice(-5 * 24).map(entry => entry.value))
    }

    const getTotalPrecipitation = () => {
        return precipitation
            .slice(-5 * 24)
            .map(entry => entry.value)
            .reduce((total, entry) => {
                return total + entry;
            }, 0).toFixed(1)

    }

    const getAverageWindSpeed = () => {
        return wind
            .slice(-5 * 24)
            .map(entry => entry.value)
            .reduce((total, entry) => {
                return total + entry / wind.length;
            }, 0).toFixed(1)

    }

    const getDominantWindDirection = () => {
        return wind
            .slice(-5 * 24)
            .map(entry => entry.direction)
            .sort((a, b) =>
                wind.filter(value => value === a).length - wind.filter(value => value === b).length
            ).pop()
    }

    const getAverageCloudCoverage = () => {
        return cloud
            .slice(-5 * 24)
            .map(entry => entry.value)
            .reduce((total, entry) => {
                return total + entry / cloud.length;
            }, 0).toFixed(1)
    }

    const getPredictions = (intervalStart, intervalEnd) => {
        let result = []
        for (let i = 0; i < 24; i++) {
            let date = new Date(temperaturePrediction[i].time)
            if (filterPredictions(intervalStart, intervalEnd, date)) {
                    result.push({
                        temperature: temperaturePrediction[i],
                        precipitation: precipitationPrediction[i],
                        wind: windPrediction[i],
                        cloud: cloudPrediction[i],
                    })
            }
        }
        return result
    }

    const filterPredictions = (intervalStart, intervalEnd, date) => {
        if(intervalStart != null && intervalEnd != null) {
            let now = new Date()
                if(intervalStart > intervalEnd) {
                    if(date.getDay() === now.getDay()) {
                        return intervalStart<=date.getHours()
                    } else {
                        return date.getHours()<=intervalEnd
                    }
                } else {
                    if(date.getDay() !== now.getDay() && intervalStart<=now.getHours() && intervalEnd>now.getHours()) {
                        return false;
                    }
                    return intervalStart<=date.getHours() && date.getHours()<=intervalEnd
                }
        } else {
            return true
        }
    }



    return {
        place,
        all,
        lastMeasurement,
        getHistoryMeasurements,
        getPredictions,
        getMinimumTemperature,
        getMaximumTemperature,
        getTotalPrecipitation,
        getAverageWindSpeed,
        getDominantWindDirection,
        getAverageCloudCoverage
    }
}

export default model
