'use strict';

var React = require('react-native');
import ParallaxScrollView from 'react-native-parallax-scroll-view';
var {
    StyleSheet,
    Text,
    View,
    Image
    } = React;

var Icon = require('react-native-vector-icons/Ionicons');

var ApiImages = require('./apiImages.js');
var GlobalState = require('./globalStateApi.js').getAll();
var daysOfWeek = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY' ,'SATURDAY', 'SUNDAY'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


var Details = React.createClass({
    _stateHolder: {},
    getInitialState: function() {
        console.log('***************')
        console.log(this._stateHolder)
        return {
            url: '../images/details_fallback',
            icon: null
        }
    },
    componentDidMount: function() {
        var self = this;
        this._stateHolder = GlobalState;
        this.setState({
            icon: this.getIcon(GlobalState.currentApiWeather.weather[0].icon)
        })
        ApiImages(GlobalState.currentApiWeather.name)
            .then(function(response) {
                if (self.isMounted()) {
                    //leaving out for now, need to come back
                    self.setState({url: response.items[0].media.m})
                }
            }.bind(this))
            .catch(function(error) {
                console.log('error from api images module')
                console.log(error)
            });

    },
    render: function(){
        return(
            <ParallaxScrollView
                backgroundColor='rgba(0,0,0,.4)'
                contentBackgroundColor='white'
                parallaxHeaderHeight={390}
                renderBackground={() => (
                    <View key='background'>
                          <Image source={{
                              uri: 'http://www.hoteles-catalonia.com/blog/wp-content/uploads/2014/12/ouyeaa-barcelona.jpg',
                              //uri: this.state.url,
                              width: window.width,
                              height: 390
                            }}/>
                    </View>
                )}
                renderForeground={() => (
                    <View style={styles.foregroundWrapper}>
                        <View style={styles.headingBox}>
                            <Text style={styles.headingText}>{GlobalState.currentApiWeather.name}</Text>
                        </View>
                        <View style={styles.headerTextDiv}>
                            <View style={{alignItems: 'flex-end'}}>
                                  <Text style={styles.headerTextDegrees}>
                                    {GlobalState.currentApiWeather.main.temp.toFixed(0)}
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
                                         {daysOfWeek[new Date().getDay()].toUpperCase()}, {months[new Date().getMonth()].toUpperCase()} {new Date().getDate()}
                                    </Text>
                            </View>
                        </View>
                    </View>
                )}>
                <View style={{
                    height: 500
                }}>
                    <Text>Scroll me</Text>

                </View>
            </ParallaxScrollView>
        );
    },
    getIcon: function(code){
        var icon;
        switch(code){
            case '01d':
                //sky is clear
                //icon = require('../images/weather-states-set/01d.png');
                icon = <Icon name="ios-sunny-outline" size={60} color="#fff" />
                break;
            case '01n':
                //icon = require('../images/weather-states-set/01n.png');
                icon = <Icon name="ios-moon-outline" size={60} color="#fff" />
                break;
            case '02d':
                //few clouds
                //icon = require('../images/weather-states-set/02d.png');
                icon = <Icon name="ios-partlysunny-outline" size={60} color="#fff" />
                break;
            case '02n':
                //icon = require('../images/weather-states-set/02n.png');
                icon = <Icon name="ios-cloudy-night-outline" size={60} color="#fff" />
                break;
            case '03d':
                //scattered clouds
                //icon = require('../images/weather-states-set/03d.png');
                icon = <Icon name="ios-cloudy-outline" size={60} color="#fff" />
                break;
            case '03n':
                //icon = require('../images/weather-states-set/03n.png');
                icon = <Icon name="ios-cloudy-outline" size={60} color="#fff" />
                break;
            case '04d':
                //icon = require('../images/weather-states-set/04d.png');
                icon = <Icon name="ios-cloudy-outline" size={60} color="#fff" />
                break;
            case '04n':
                //broken clouds
                //icon = require('../images/weather-states-set/04n.png');
                icon = <Icon name="ios-cloudy-outline" size={60} color="#fff" />
                break;
            case '09d':
                //shower rain
                //icon = require('../images/weather-states-set/09d.png');
                icon = <Icon name="ios-rainy-outline" size={60} color="#fff" />
                break;
            case '09n':
                //icon = require('../images/weather-states-set/09n.png');
                icon = <Icon name="ios-rainy-outline" size={60} color="#fff" />
                break;
            case '10d':
                //rain
                //icon = require('../images/weather-states-set/10d.png');
                icon = <Icon name="ios-rainy-outline" size={60} color="#fff" />
                break;
            case '10n':
                //icon = require('../images/weather-states-set/10n.png');
                icon = <Icon name="ios-rainy-outline" size={60} color="#fff" />
                break;
            case '11d':
                //thunderstom
                //icon = require('../images/weather-states-set/11d.png');
                icon = <Icon name="ios-thunderstorm-outline" size={60} color="#fff" />
                break;
            case '11n':
                //icon = require('../images/weather-states-set/11n.png');
                icon = <Icon name="ios-thunderstorm-outline" size={60} color="#fff" />
                break;
            case '13d':
                //snow
                //icon = require('../images/weather-states-set/13d.png');
                icon = <Icon name="ios-snowy" size={60} color="#fff" />
                break;
            case '13n':
                //icon = require('../images/weather-states-set/13n.png');
                icon = <Icon name="ios-snowy" size={60} color="#fff" />
                break;
            case '50d':
                //mist
                //icon = require('../images/weather-states-set/50d.png');
                icon = <Icon name="ios-snowy" size={60} color="#fff" />
                break;
            case '50n':
                //icon = require('../images/weather-states-set/50n.png');
                icon = <Icon name="ios-snowy" size={60} color="#fff" />
                break;
        }
        return icon;
    }
});

var styles = StyleSheet.create({
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
        flexDirection: 'row'
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
});

module.exports = Details;

