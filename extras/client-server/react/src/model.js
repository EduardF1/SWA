const model = (place,
               temperature,
               precipitation,
               wind,
               cloud,
               temperaturePrediction,
               precipitationPrediction,
               windPrediction,
               cloudPrediction,
               historyFrom,
               historyTo,
               forecastFrom,
               forecastTo,
               filter = () => true
) => {
    const reload = (
        place,               
        temperature,
        precipitation,
        wind,
        cloud,
        temperaturePrediction,
        precipitationPrediction,
        windPrediction,
        cloudPrediction) => model(
            place,               
            temperature,
            precipitation,
            wind,
            cloud,
            temperaturePrediction,
            precipitationPrediction,
            windPrediction,
            cloudPrediction,
            historyFrom,
            historyTo,
            forecastFrom,
            forecastTo,
            filter
        )

    const temperatureData = () => filterHistoryData(temperature)
    const precipitationData = () => filterHistoryData(precipitation)
    const windData = () => filterHistoryData(wind)
    const cloudData = () => filterHistoryData(cloud)
    const temperaturePredictionData = () => filterForecastData(temperaturePrediction)
    const precipitationPredictionData = () => filterForecastData(precipitationPrediction)
    const windPredictionData = () => filterForecastData(windPrediction)
    const cloudPredictionData = () => filterForecastData(cloudPrediction)

    function filterHistoryData(data) {
        if(historyFrom && historyTo) {
            return data.filter(x => {
                let date = new Date(x.time)
                date.setHours(date.getHours()-1);
                let result = historyFrom<=date && date<=historyTo
                return result})
        }
        else
            return data.filter(filter)
    }

    function filterForecastData(data) {
        if(forecastFrom && forecastTo) {
            let now = new Date();
            return data.filter(x => {
                let date = new Date(x.time)
                if(forecastFrom>forecastTo) {
                    if(date.getDay() === now.getDay()) {
                        return forecastFrom<=date.getHours()
                    } else {
                        return date.getHours()<=forecastTo
                    }
                } else {
                    if(date.getDay() !== now.getDay() && forecastFrom<=now.getHours() && forecastTo>now.getHours()) {
                        return false;
                    }
                    return forecastFrom<=date.getHours() && date.getHours()<=forecastTo
                }
            })
        }
        else
            return data.filter(filter)
    }

    const historyFiltered = (historyFrom,historyTo) => model(
        place,
        temperature,
        precipitation,
        wind,
        cloud,
        temperaturePrediction,
        precipitationPrediction,
        windPrediction,
        cloudPrediction,
        historyFrom,
        historyTo,
        forecastFrom,
        forecastTo,
        filter
    )

    const forecastFiltered = (forecastFrom,forecastTo) => model(
        place,
        temperature,
        precipitation,
        wind,
        cloud,
        temperaturePrediction,
        precipitationPrediction,
        windPrediction,
        cloudPrediction,
        historyFrom,
        historyTo,
        forecastFrom,
        forecastTo,
        filter
    )

    const latest = () => model(
        place,
        findLatest(temperature),
        findLatest(precipitation),
        findLatest(wind),
        findLatest(cloud),
        historyFrom,
        historyTo
    )

    const lastFive = () => model(
        place,
        getLastFive(temperature),
        getLastFive(precipitation),
        getLastFive(wind),
        getLastFive(cloud)
    )

    const all = () => model(
        place,
        temperature,
        precipitation,
        wind,
        cloud,
        temperaturePrediction,
        precipitationPrediction,
        windPrediction,
        cloudPrediction,
        historyFrom,
        historyTo,
        forecastFrom,
        forecastTo
    )

    return {
        place,
        temperatureData,
        precipitationData,
        windData,
        cloudData,
        temperaturePredictionData,
        precipitationPredictionData,
        windPredictionData,
        cloudPredictionData,
        historyFiltered,
        forecastFiltered,
        latest,
        lastFive,
        reload,
        historyFrom,
        historyTo,
        forecastFrom,
        forecastTo,
        all
    }
}

export default model

function findLatest(data) {
    return [data[data.length-1]];
}

function getLastFive(data) {
    return data.slice(-5*24);
}