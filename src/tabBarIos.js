'use strict';

var React = require('react-native');
var {
  MapView,
  StyleSheet,
  TabBarIOS,
  Text,
  View,
    Image,
  ParallaxView
} = React;

import ParallaxScrollView from 'react-native-parallax-scroll-view';

var CustomMap = require('./mapCustom.js');
var GlobalState = require('./globalStateApi.js');

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
  componentDidMount: function(){
    // GlobalState.setRoot(this);
    GlobalState.subscribeRoot(this);
  },
  render: function() {
    return (
      <TabBarIOS
        tintColor="white"
        barTintColor="darkslateblue"
        say={'NAME'}>
        <TabBarIOS.Item
          title="Map"
          icon={require('../images/map/watchkit/AppIcon.appiconset/Icon-27.5@2x.png')}
          selected={this.state.selectedTab === 'map'}
          onPress={() => {
            this.setState({
              selectedTab: 'map',
            });
          }}>
          <View style={{flex:1, position: 'relative'}}>
            <CustomMap />
            <View style={styles.bottomInfoBox}>
              <Text style={{color: 'white'}}>
              {this.state.currentApiWeather.name}, {this.state.currentApiWeather.sys.country}
              </Text>
              <Text style={{color: 'white'}}>
              {this.state.currentApiWeather.weather[0].main}
              </Text>
            </View>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Forecast"
          icon={require('../images/forecast/watchkit/AppIcon.appiconset/Icon-27.5@2x.png')}
          selected={this.state.selectedTab === 'weather-detail'}
          onPress={() => {
            this.setState({
              selectedTab: 'weather-detail'
            });
          }}>
            <ParallaxScrollView
                backgroundColor="blue"
                contentBackgroundColor="pink"
                parallaxHeaderHeight={300}
                renderBackground={() => (
            <View key="background">
              <Image source={{uri: 'https://i.ytimg.com/vi/P-NZei5ANaQ/maxresdefault.jpg',
                              width: window.width,
                              height: 300}}/>
              <View style={{position: 'absolute',
                            top: 0,
                            width: window.width,
                            backgroundColor: 'rgba(0,0,0,.4)',
                            height: 300}}/>
            </View>
          )}
                renderForeground={() => (
       <View style={{ height: 300, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Hello World!</Text>
        </View>
      )}>
                <View style={{ height: 500 }}>
                    <Text>Scroll me</Text>
                </View>
            </ParallaxScrollView>
        </TabBarIOS.Item>
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