'use strict';

var React = require( 'react-native' );
var {
      TabBarIOS,
      View,
      StatusBarIOS,
      StyleSheet,
      TouchableHighlight,
  Text
      } = React;

var CustomMap = require( './mapCustom.js' );
var BasicInfoContainerHome = require( './basicInfoContainerHome.js' );
var Details = require( './details.js' );
var Autocomplete = require( './autocomplete.js' );
var Icon = require( 'react-native-vector-icons/Ionicons' );
var GlobalState = require( './apis/globalStateApi.js' );
var Api = require( './apis/api.js' );



var TabBarCustom = React.createClass( {
  getInitialState: function () {
    StatusBarIOS.setStyle('light-content');
    navigator.geolocation.getCurrentPosition(
      ( position ) => {
      },
      ( error ) => alert( error.message ),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000
      }
    );
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
            <Autocomplete />
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
    console.log('eing?')
    console.log(coordinates)
    Api( 'forecast', coordinates.latitude, coordinates.longitude )
      .then( function ( response ) {
        GlobalState.set( 'city', response );
        console.log('**********')
        console.log(response)
        console.log('**********')
      } )
      .catch( function ( error ) {
        console.log( 'error from api module' )
        console.log( error )
      } );
  }
} );


var styles = StyleSheet.create({
  wrapper: {
    borderRadius: 5,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#eeeeee',
    padding: 10,
  },
});

module.exports = TabBarCustom;