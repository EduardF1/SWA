import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import model from './model.js'
import store from './store.js'
import view from './view.js'
import dispatcher from './dispatcher.js'

async function init() {
    try {
        let place = "Horsens"
        const data = await loadData(place);
        const theModel = model(place,data.temperature,data.precipitation,data.wind,data.cloud,data.temperaturePrediction,data.precipitationPrediction,data.windPrediction,data.cloudPrediction,data.historyFrom,data.historyTo,data.forecastFrom,data.forecastTo)
        let renderer = dom => ReactDOM.render(dom, document.getElementById('root'))
        let theDispatcher
        const theView = view(() => theDispatcher)
        const theStore = store(theModel, theView, renderer)
        theDispatcher = dispatcher(theStore)
        renderer(theView(theModel))
    } catch (err) {
        console.log(err)
    }
}

init()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

async function loadData(place) {
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
    
    const historyFrom = new Date(temperature[0].time)
    const historyTo = new Date(temperature[temperature.length-1].time)
    const forecastFrom = new Date(temperaturePrediction[0].time).getHours();
    const forecastTo = new Date(temperaturePrediction[temperaturePrediction.length-1].time).getHours();

     return {          
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