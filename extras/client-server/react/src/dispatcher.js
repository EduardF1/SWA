export default store => async ({type, ...params}) =>  {
  console.log("Dispatcher new request")
    switch(type) {
      case 'submit':
        const { newData } = params
        if (newData) {
          let preparedData = prepareDataForSubmit(newData)
          console.log("Dispatcher request: submit")
          console.log("Data: "+JSON.stringify(preparedData))
          const headers = { 'Content-Type': 'application/json', Accept: 'application/json' }
          const submitStatus = await fetch('http://localhost:8080/data',
            { method: 'POST', 
              body: JSON.stringify(preparedData), 
              headers}).then(res => res.status)
          console.log("Server responded with status code:"+submitStatus)
          if(submitStatus === 201) {
            loadAndStoreData({store,type,place:newData.place})
          } 
        }
        break;

      case 'loadDataForPlace':
        const { place } = params
        console.log("Dispatcher request: loadDataForPlace + "+place)
        if (place) {
          loadAndStoreData({store,type,place})
        }
        break;

      case 'updateHistoryDataFilter':
        const {historyFrom,historyTo} = params
        console.log("Dispatcher request: updateHistoryDataFilter")
        store({type,historyFrom,historyTo})
        break;

      case 'updateForecastDataFilter':
        const {forecastFrom,forecastTo} = params
        console.log("Dispatcher request: updateForecastDataFilter")
        store({type,forecastFrom,forecastTo})
        break;

      default:
    }
}

function groupDataByType(data) {
    // Group by data type
    return data.reduce((types, entry) => {
      const type = (types[entry.type] || []);
      type.push(entry);
      types[entry.type] = type;
      return types;
  }, {});
}

function prepareDataForSubmit(data) {
  let date = new Date().toISOString()
  let preparedData = [{
      "type": "temperature",
      "time": date,
      "place": data.place,
      "value": Number(data.temperature),
      "unit": "C"
  }, {
      "type": "precipitation",
      "time": date,
      "place": data.place,
      "value": Number(data.precipitation),
      "unit": "mm",
      "precipitation_type": data.precipitationType
  }, {
      "type": "wind speed",
      "time": date,
      "place": data.place,
      "value": Number(data.wind),
      "unit": "m/s",
      "direction": data.windDirection
  }, {
      "type": "cloud coverage",
      "time": date,
      "place": data.place,
      "value": Number(data.cloud),
      "unit": "%"
  }]
  return preparedData;
}

async function loadAndStoreData({store,type,place}) {
  const historyData = await fetch(`http://localhost:8080/data/${place}`).then(res => res.json())
  const forecastData = await fetch(`http://localhost:8080/forecast/${place}`).then(res => res.json())
  
  const historyDataGrouped = groupDataByType(historyData)
  const forecastDataGrouped = groupDataByType(forecastData)

  const temperature = historyDataGrouped["temperature"]
  const precipitation = historyDataGrouped["precipitation"]
  const wind = historyDataGrouped["wind speed"]
  const cloud = historyDataGrouped["cloud coverage"]
  const temperaturePrediction = forecastDataGrouped["temperature"]
  const precipitationPrediction = forecastDataGrouped["precipitation"]
  const windPrediction = forecastDataGrouped["wind speed"]
  const cloudPrediction = forecastDataGrouped["cloud coverage"] 
  
  store({
    type,
    place, 
    temperature,
    precipitation,
    wind,
    cloud,
    temperaturePrediction,
    precipitationPrediction,
    windPrediction,
    cloudPrediction
  })
}
