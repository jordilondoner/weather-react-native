/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var TabBarCustom = require('./src/tabBarIos.js');

var {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} = React;

var Weather = React.createClass({
  render: function(){
    return <View style={styles.mainContainer}>
        <TabBarCustom />
      </View>
  }
});

var styles = {
  mainContainer: {
    flex: 1
  }
};

AppRegistry.registerComponent('weather', () => Weather);

