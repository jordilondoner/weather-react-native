/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var TabBarCustom = require('./src/tabBarIos.js');
var MapExamples = require('./src/mapExamples.js');

console.log('*************')
console.log('*************')
console.log(MapExamples.examples.length)
console.log('*************')
console.log('*************')

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

AppRegistry.registerComponent('weather', () => React.createClass(MapExamples.examples[7]));



