'use strict';

var React = require( 'react-native' );
var {
      MapView,
      StyleSheet,
      Text,
      View
      } = React;
var Api = require( './apis/api.js' );
var GlobalState = require( './apis/globalStateApi.js' );

var CustomMap = React.createClass( {
  getInitialState: function () {
    GlobalState.subscribeToModel('currentCoordinates', this);
    var localState = GlobalState;
    localState.annotations = [];
    return localState;
  },
  render: function () {
    return (
      <MapView
        annotations={this.state.annotations}
        region={this.state.region}
        onRegionChangeComplete={this._onRegionChangeComplete}
        showsUserLocation={true}
        style={styles.map}>
      </MapView>
    );
  },
  _onRegionChangeComplete: function ( region ) {

    this.setState( {
      annotations: this._getAnnotations( region )
    } );

    console.log('%chere', 'background:blue')
    Api( 'weather', region.latitude, region.longitude )
      .then( function ( response ) {
        GlobalState.set( 'currentApiWeather', response );
        GlobalState.set('currentCoordinates', {
          "longitude": region.longitude,
          "latitude": region.longitude
        });
      } )
      .catch( function ( error ) {
        console.log( 'error from api module' )
        console.log( error )
      } );
  },
  _getAnnotations: function ( region ) {
    var annotation = annotation || {};
    annotation.longitude = region.longitude;
    annotation.latitude = region.latitude;
    return [ annotation ];
  },
  _getRegion: function ( location ) {
    var region = {
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: .1,
      longitudeDelta: .1
    };
    return region;
  }
} );

var styles = StyleSheet.create( {
  map: {
    flex: 1
  }
} );

module.exports = CustomMap;