export default (init_model, view, renderer) => {
  let model = init_model

  function reducer(action, model) {
    switch(action.type) {
      case 'loadDataForPlace': case 'submit':
        const { 
          place,
          temperature,
          precipitation,
          wind,
          cloud,
          temperaturePrediction,
          precipitationPrediction,
          windPrediction,
          cloudPrediction 
        } = action
        return model.reload(
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

      case 'updateHistoryDataFilter':
          const {historyFrom,historyTo} = action
          console.log("Store: updateHistoryDataFilter")
          return model.historyFiltered(historyFrom,historyTo)

      case 'updateForecastDataFilter':
          const {forecastFrom,forecastTo} = action
          console.log("Store: updateForecastDataFilter")
          return model.forecastFiltered(forecastFrom,forecastTo)

      default:
        return model
    }
  }

  return action => {
    model = reducer(action, model)
    renderer(view(model))
  }
}
