'use strict';

var React = require( 'react-native' );
var {
      TabBarIOS,
      View
      } = React;

var CustomMap = require( './mapCustom.js' );
var BasicInfoContainerHome = require( './basicInfoContainerHome.js' );
var Details = require( './details.js' );
var Icon = require( 'react-native-vector-icons/Ionicons' );
var GlobalState = require( './apis/globalStateApi.js' );
var Api = require( './apis/api.js' );

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
        style={{borderTopColor: '#aaaaaa', borderTopWidth: 1, borderStyle: 'solid'}}
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
            <BasicInfoContainerHome />
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
            this._request_5_days();
          }}>
          <Details />
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  },
  _request_5_days: () => {
    var coordinates = GlobalState.get('currentCoordinates');
    Api( 'forecast', coordinates.latitude, coordinates.longitude )
      .then( function ( response ) {
        GlobalState.set( 'city', response );
      } )
      .catch( function ( error ) {
        console.log( 'error from api module' )
        console.log( error )
      } );
  }
} );

module.exports = TabBarCustom;