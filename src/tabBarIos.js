'use strict';

var React = require('react-native');
var {MapView, StyleSheet, TabBarIOS, Text, View, Image, ParallaxView} = React;



var CustomMap = require('./mapCustom.js');
var Details = require('./details.js');

var GlobalState = require('./globalStateApi.js');
var Icon = require('react-native-vector-icons/Ionicons');

var TabBarCustom = React.createClass({
  statics: {
    title: '<TabBarIOS>',
    description: 'Tab-based navigation.',
  },

  displayName: 'TabBarCustom',

  getInitialState: function() {
    var globalState = GlobalState.getAll();
    return globalState;
  },
  componentDidMount: function() {
    // GlobalState.setRoot(this);
    GlobalState.subscribeRoot(this);
  },
  render: function() {
    return (
      <TabBarIOS
      tintColor="white"
      barTintColor="darkslateblue"
      say={'NAME'}>
        <Icon.TabBarItem
      title="Map"
      iconName="ios-location-outline"
      selectedIconName="ios-location"
      selected={this.state.selectedTab === 'map'}
      onPress={() => {
        this.setState({
          selectedTab: 'map',
        });
      }}>
          <View style={{
        flex: 1,
        position: 'relative'
      }}>
            <CustomMap />
            <View style={styles.bottomInfoBox}>
              <Text style={{
        color: 'white'
      }}>
              {this.state.currentApiWeather.name}, {this.state.currentApiWeather.sys.country}
              </Text>
              <Text style={{
        color: 'white'
      }}>
              {this.state.currentApiWeather.weather[0].main}
              </Text>
            </View>
          </View>
        </Icon.TabBarItem>
        <Icon.TabBarItem
      title="Forecast"
      iconName="ios-partlysunny-outline"
      selectedIconName="ios-partlysunny"
      iconsize={40}
      selected={this.state.selectedTab === 'weather-detail'}
      onPress={() => {
        this.setState({
          selectedTab: 'weather-detail'
        });
      }}>
          <Details />
        </Icon.TabBarItem>
      </TabBarIOS>
      );
  }

});

var styles = StyleSheet.create({
  bottomInfoBox: {
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    flex: .3,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    padding: 10
  }
});

module.exports = TabBarCustom;