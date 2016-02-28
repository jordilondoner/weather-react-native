'use strict';

var React = require('react-native');
var {Text, View, StyleSheet} = React;
var GlobalState = require('./globalStateApi.js');


var InfoMap = React.createClass({
    getInitialState: function() {
        var globalState = GlobalState.getAll();
        return globalState;
    },
    render: function(){
        return(
            <View style={styles.bottomInfoBox}>
                <Text style={{color: 'white'}}>
                    {this.state.name}, {this.state.sys.country}
                </Text>
                <Text style={{color: 'white'}}>
                    {this.state.weather[0].main}
                </Text>
            </View>
        )
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


module.exports = InfoMap;

