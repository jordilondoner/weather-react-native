var models = {
  currentApiWeather: {
    "coord": {
      "lon": 0,
      "lat": 0
    },
    "sys": {
      "country": "",
      "sunrise": 0,
      "sunset": 0
    },
    "weather": [
      {
        "id": 0,
        "main": "",
        "description": "",
        "icon": ""
      }
    ],
    "main": {
      "temp": 0,
      "humidity": 0,
      "pressure": 0,
      "temp_min": 0,
      "temp_max": 0
    },
    "wind": {
      "speed": 0,
      "deg": 0
    },
    "rain": {
      "3h": 0
    },
    "clouds": {
      "all": 0
    },
    "dt": 0,
    "id": 0,
    "name": "",
    "cod": 0
  }
};

/**
 * Bindings is the array that holds the objects that describe
 * which components are subscribed to which models
 * {
 *  component: object,
 *  model: 'string'
 * }
 * component will be send using this from the 'componentDidMount' method
 * of the compontent that wants to subscribe, model will make reference
 * to one of the models contained on state
 */
var bindings = [];

var getFull = function () {
  return models;
};

var getState = function ( prop ) {
  if ( typeof state[ prop ] != 'undefined' )
    return state[ prop ];
  else
    return '';
};

var setState = function ( model, value ) {
  models[ model ] = value;
  bindings.forEach(function(item, index){
      if(item.model == model)
        item.component.setState( models );
  });
};

/**
 * This method will be called by the components that want to be subscribed
 * to a particular set of data --> 'model'
 * Doing that, they will be setState and therefore rerendered each time
 * that the model to which they are subscribed changes.
 * @param model
 * @param component
 */
var subscribeToModel = function ( model, component ) {
  bindings.push({
    model: model,
    component: component
  });
};

module.exports = {
  get: getState,
  set: setState,
  getAll: getFull,
  subscribeToModel: subscribeToModel
};