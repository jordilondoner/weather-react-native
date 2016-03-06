var models = {
      "currentApiWeather": {
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
      },
      "city": {
        "id": 0,
        "name": "",
        "coord": {
          "lon": 0,
          "lat": 0
        },
        "country": "",
        "cod": "",
        "message": 0,
        "cnt": 0,
        "list": [
          {
            "dt": 0,
            "main": {
              "temp": 0,
              "temp_min": 0,
              "temp_max": 0,
              "pressure": 0,
              "sea_level": 0,
              "grnd_level": 0,
              "humidity": 0,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 0,
                "main": "",
                "description": "",
                "icon": ""
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 0,
              "deg": 0
            },
            "sys": {
              "pod": ""
            },
            "dt_txt": ""
          }
        ]
      },
      "currentCoordinates":{
        "region": {
          "longitude": 0,
          "latitude": 0,
          "latitudeDelta": .1,
          "longitudeDelta": .1
        }
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

/**
 * Mostly used from a 'getInitialState' method from components,
 * is meant to initialize the component state according with the
 * models defined in the 'models' holder described above on this file
 * @param prop
 * @returns {*}
 */
var getState = function ( prop ) {
  return models[ prop ];
};

/**
 * Method called from those parts of the app that have the ability to
 * manipulate the data layer, such as http requests, fs queries, etc,
 * when called is going to update the data model that gets in it's first parameter
 * and then is going to call setstate on every component that has previously
 * subscribed to the model that is being updated
 * @param model
 * @param value
 */
var setState = function ( model, value ) {
  models[ model ] = value;
  bindings.forEach( function ( item, index ) {
    if ( item.model == model ){
      item.component.setState( models[ model ] );
      //item.component.forceUpdate();
    }
  } );
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
  bindings.push( {
    model: model,
    component: component
  } );
};

module.exports = {
  get: getState,
  set: setState,
  subscribeToModel: subscribeToModel
};