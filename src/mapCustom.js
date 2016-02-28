'use strict';

var React = require('react-native');
var {MapView, StyleSheet, Text, View} = React;

var Api = require('./api.js');
var CustomTooltip = require('./customTooltip.js');
var GlobalState = require('./globalStateApi.js');


var CustomMap = React.createClass({
  getInitialState: function() {
    var self = this;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        self.setState({
          region: this._getRegion(position.coords)
        });
      },
      (error) => alert(error.message),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000
      }
    );
    return {
      annotations: [],
      region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
      }
    }
  },
  // componentDidMount: function(){
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       this.setState({
  //         region: this._getRegion(position.coords)
  //       });
  //     },
  //     (error) => alert(error.message),
  //     {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
  //   );
  // },
  render: function() {
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
  _onRegionChangeComplete: function(region) {
    var self = this;
    this.setState({
      annotations: this._getAnnotations(region)
    });

    Api(region.latitude, region.longitude)
      .then(function(response) {
        GlobalState.set('currentApiWeather', response);
      })
      .catch(function(error) {
        console.log('error from api module')
        console.log(error)
      });
  },
  _getAnnotations: function(region) {
    var annotation = annotation || {};
    annotation.longitude = region.longitude;
    annotation.latitude = region.latitude;
    return [annotation];
  },
  _getRegion: function(location) {
    var region = {
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: .1,
      longitudeDelta: .1
    };
    return region;
  }
});

var styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

module.exports = CustomMap;