'use strict';

var React = require( 'react-native' );
var Icon = require( 'react-native-vector-icons/Ionicons' );

module.exports = function ( code ) {
  var icon;
  switch ( code ) {
    case '01d':
      //sky is clear
      icon = <Icon name="ios-sunny-outline" size={60} color="#fff"/>
      break;
    case '01n':
      icon = <Icon name="ios-moon-outline" size={60} color="#fff"/>
      break;
    case '02d':
      //few clouds
      icon = <Icon name="ios-partlysunny-outline" size={60} color="#fff"/>
      break;
    case '02n':
      icon = <Icon name="ios-cloudy-night-outline" size={60} color="#fff"/>
      break;
    case '03d':
      //scattered clouds
      icon = <Icon name="ios-cloudy-outline" size={60} color="#fff"/>
      break;
    case '03n':
      icon = <Icon name="ios-cloudy-outline" size={60} color="#fff"/>
      break;
    case '04d':
      icon = <Icon name="ios-cloudy-outline" size={60} color="#fff"/>
      break;
    case '04n':
      //broken clouds
      icon = <Icon name="ios-cloudy-outline" size={60} color="#fff"/>
      break;
    case '09d':
      //shower rain
      icon = <Icon name="ios-rainy-outline" size={60} color="#fff"/>
      break;
    case '09n':
      icon = <Icon name="ios-rainy-outline" size={60} color="#fff"/>
      break;
    case '10d':
      //rain
      icon = <Icon name="ios-rainy-outline" size={60} color="#fff"/>
      break;
    case '10n':
      icon = <Icon name="ios-rainy-outline" size={60} color="#fff"/>
      break;
    case '11d':
      //thunderstom
      icon = <Icon name="ios-thunderstorm-outline" size={60} color="#fff"/>
      break;
    case '11n':
      icon = <Icon name="ios-thunderstorm-outline" size={60} color="#fff"/>
      break;
    case '13d':
      //snow
      icon = <Icon name="ios-snowy" size={60} color="#fff"/>
      break;
    case '13n':
      icon = <Icon name="ios-snowy" size={60} color="#fff"/>
      break;
    case '50d':
      //mist
      icon = <Icon name="ios-snowy" size={60} color="#fff"/>
      break;
    case '50n':
      icon = <Icon name="ios-snowy" size={60} color="#fff"/>
      break;
  }
  return icon;
};