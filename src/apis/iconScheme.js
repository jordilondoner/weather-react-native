'use strict';

var React = require( 'react-native' );
var Icon = require( 'react-native-vector-icons/Ionicons' );

module.exports = function ( code, size, color ) {
  var icon;
  var color = color || '#fff';
  switch ( code ) {
    case '01d':
      //sky is clear
      icon = <Icon name="ios-sunny-outline" size={size} color={color}/>
      break;
    case '01n':
      icon = <Icon name="ios-moon-outline" size={size} color={color}/>
      break;
    case '02d':
      //few clouds
      icon = <Icon name="ios-partlysunny-outline" size={size} color={color}/>
      break;
    case '02n':
      icon = <Icon name="ios-cloudy-night-outline" size={size} color={color}/>
      break;
    case '03d':
      //scattered clouds
      icon = <Icon name="ios-cloudy-outline" size={size} color={color}/>
      break;
    case '03n':
      icon = <Icon name="ios-cloudy-outline" size={size} color={color}/>
      break;
    case '04d':
      icon = <Icon name="ios-cloudy-outline" size={size} color={color}/>
      break;
    case '04n':
      //broken clouds
      icon = <Icon name="ios-cloudy-outline" size={size} color={color}/>
      break;
    case '09d':
      //shower rain
      icon = <Icon name="ios-rainy-outline" size={size} color={color}/>
      break;
    case '09n':
      icon = <Icon name="ios-rainy-outline" size={size} color={color}/>
      break;
    case '10d':
      //rain
      icon = <Icon name="ios-rainy-outline" size={size} color={color}/>
      break;
    case '10n':
      icon = <Icon name="ios-rainy-outline" size={size} color={color}/>
      break;
    case '11d':
      //thunderstom
      icon = <Icon name="ios-thunderstorm-outline" size={size} color={color}/>
      break;
    case '11n':
      icon = <Icon name="ios-thunderstorm-outline" size={size} color={color}/>
      break;
    case '13d':
      //snow
      icon = <Icon name="ios-snowy" size={size} color={color}/>
      break;
    case '13n':
      icon = <Icon name="ios-snowy" size={size} color={color}/>
      break;
    case '50d':
      //mist
      icon = <Icon name="ios-snowy" size={size} color={color}/>
      break;
    case '50n':
      icon = <Icon name="ios-snowy" size={size} color={color}/>
      break;
    case false:
        icon = <Icon name="load-c" size={size} color={color}/>
      break;
  }
  return icon;
};