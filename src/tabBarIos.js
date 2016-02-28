'use strict';

var React = require('react-native');
var {MapView, StyleSheet, TabBarIOS, Text, View, Image, ParallaxView} = React;



var CustomMap = require('./mapCustom.js');
var MapInfo = require('./mapInfo.js');
var Details = require('./details.js');

var GlobalState = require('./globalStateApi.js');
var Icon = require('react-native-vector-icons/Ionicons');

var TabBarCustom = React.createClass({


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
            <MapInfo />
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

module.exports = TabBarCustom;