'use strict';

var React = require( 'react-native' );
var {
      StyleSheet,
      TabBarIOS,
      View
      } = React;

var CustomMap = require( './mapCustom.js' );
var BasicInfoContainer = require( './basicInfoContainer.js' );
var Details = require( './details.js' );
var Icon = require( 'react-native-vector-icons/Ionicons' );

var TabBarCustom = React.createClass( {
  getInitialState: function () {
    return {
      selectedTab: 'map'
    }
  },
  render: function () {
    return (
      <TabBarIOS
        tintColor="#4099ff"
        barTintColor="#fff"
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
          }}
        >
          <View style={{flex: 1, position: 'relative'}}>
            <CustomMap />
            <View style={styles.bottomInfoBox}>
              <BasicInfoContainer />
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

} );

var styles = StyleSheet.create({
  bottomInfoBox: {
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    flex: .3,
    position: 'absolute',
    bottom: 70,
    left: 0,
    right: 0,
    height: 100
  }
});

module.exports = TabBarCustom;