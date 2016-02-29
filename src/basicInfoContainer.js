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

var BasicInfoContainer = React.createClass( {
  getInitialState: function () {
    GlobalState.subscribeToModel('currentApiWeather', this);
    return GlobalState.get('currentApiWeather');
  },
  componentDidMount: function () {
    this.setState( {
      icon: IconScheme( this.state.weather[ 0 ].icon, 60 )
    } )
  },
  render: function () {
    return (
      <View style={styles.foregroundWrapper}>
        <View style={styles.headingBox}>
          <Text style={styles.headingText}>{this.state.name}</Text>
        </View>
        <View style={styles.headerTextDiv}>
          <View style={{alignItems: 'flex-end'}}>
            <Text style={styles.headerTextDegrees}>
              {this.state.main.temp.toFixed( 0 )}
            </Text>
          </View>
          <View style={{overflow: 'visible'}}>
            <Text style={{fontSize: 35, color: 'white', paddingBottom: 30, paddingLeft: -1, overflow: 'visible'}}>
              °
            </Text>
          </View>
          <View style={{alignItems: 'flex-end', marginTop:10, paddingRight: 15, paddingLeft: 15}}>
            {this.state.icon}
          </View>
          <View style={{alignItems: 'flex-end', paddingBottom: 10, paddingLeft: 10}}>
            <Text style={{fontSize:14 , color: 'white', fontWeight: '100', paddingBottom: 7}}>
              {daysOfWeek[ new Date().getDay() ].toUpperCase()}, {months[ new Date().getMonth() ].toUpperCase()} {new Date().getDate()}
            </Text>
          </View>
        </View>
      </View>
    )
  }
} );

var styles = StyleSheet.create( {
  headerTextDiv: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    flex: .3,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    paddingTop: 0,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 0,
    overflow: 'visible'
  },
  foregroundWrapper: {
    flex: 1,
    flexDirection: 'row',
    width: window.width,
  },
  headerTextDegrees: {
    color: 'white',
    fontSize: 71
  },
  headingBox: {
    flex: .4,
    alignItems: 'center'
  },
  headingText: {
    color: 'white',
    fontSize: 30
  }
} );
module.exports = BasicInfoContainer;

