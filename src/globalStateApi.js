var state = {
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
var components = {};
var getFull = function () {
  return state;
};
var getState = function ( prop ) {
  if ( typeof state[ prop ] != 'undefined' )
    return state[ prop ];
  else
    return '';
};
var setState = function ( prop, value ) {
  state[ prop ] = value;
  components.root.setState( state );

};
var removeState = function ( prop ) {
  if ( typeof state[ prop ] != undefined ) {
    delete state[ prop ];
    return true;
  }
  else {
    return false;
  }
};
var subscribeRoot = function ( root ) {
  components.root = root;
};

module.exports = {
  get: getState,
  set: setState,
  remove: removeState,
  getAll: getFull,
  subscribeRoot: subscribeRoot
};