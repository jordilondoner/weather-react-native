'use strict';

var React = require( 'react-native' );
var {
      Text,
      View,
      StyleSheet
      } = React;
var GlobalState = require( './apis/globalStateApi.js' );
var IconScheme = require( './apis/iconScheme.js' );
var daysOfWeek = [ 'SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY' ];
var months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

var BasicInfoContainerHome = React.createClass( {
  getInitialState: function () {
    GlobalState.subscribeToModel('currentApiWeather', this);
    var localState = GlobalState.get('currentApiWeather');
    localState.icon = null;
    return localState;
  },
  render: function () {
    return (
      <View style={styles.bottomInfoBox}>
        <View style={styles.degrees}>
          <View>
            <Text style={styles.headerTextDegrees}>
              {this.state.main.temp.toFixed( 0 )}
            </Text>
          </View>
          <View>
            <Text style={{fontSize: 35, color: 'white', paddingBottom: 30, paddingLeft: -1, overflow: 'visible'}}>
              °
            </Text>
          </View>
        </View>
        <View style={styles.icon}>
          {this._getIcon()}
        </View>
        <View style={styles.description}>
          <Text style={{fontSize:14 , color: 'white', fontWeight: '100', paddingBottom: 10}}>
            {this.state.name}, {this.state.weather[0].description}
          </Text>
        </View>
      </View>
    )
  },
  _getIcon: function(){
    return IconScheme( this.state.weather[ 0 ].icon, 90 );
  }
} );

var styles = StyleSheet.create( {
  bottomInfoBox: {
    //alignItems: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    flex: .3,
    position: 'absolute',
    bottom: 45,
    left: 0,
    right: 0,
    height: 100,
    flexDirection: 'row',
  },
  headerTextDegrees: {
    color: 'white',
    fontSize: 71
  },
  headingText: {
    color: 'white',
    fontSize: 30
  },
  degrees:{
    flexDirection: 'row',
    padding: 10
  },
  icon: {
    paddingTop: 15
  },
  description:{
    padding: 20,
    justifyContent: 'flex-end',
    paddingBottom: 10
  }
} );
module.exports = BasicInfoContainerHome;

