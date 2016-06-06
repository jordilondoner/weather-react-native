'use strict';

var React = require('react-native');
var {
      Text,
      View,
      StyleSheet
      } = React;

var IconScheme = require('./apis/iconScheme.js');
var GlobalState = require('./apis/globalStateApi.js');

var daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

var FiveDaysForecast = React.createClass({
    getInitialState: function () {
        GlobalState.subscribeToModel('city', this);
        var localState = GlobalState.get('city');
        return localState;
    },
    render: function () {
        return (
          <View style={styles.container}>
              {this._days()}
          </View>
        );
    },
    _next_5_days: () => {
        var next_5_days = [];
        var start = (new Date().getDay() + 1);
        for (var i = 0; i < 5; i++) {
            if ((start + i) < daysOfWeek.length) {
                next_5_days.push(daysOfWeek[start + i]);
            } else {
                next_5_days.push(daysOfWeek[(start + i) - 7]);
            }
        }
        return next_5_days;
    },
    _days: function () {
        var self = this;
        var days = self._next_5_days();
        return days.map((day, index) => {
            return (
              <View style={{flex:2, alignItems: 'center', marginTop: 10}}>
                  <Text style={{color: '#A5A5A5', fontSize: 11}}>
                      {day}
                  </Text>
                  {self._getIcon(index)}
                  <Text style={{fontSize:18, color: '#333333'}}>
                      {this.state.list[index * 8] ? this.state.list[index * 8].main.temp.toFixed(0) : '--'}°
                  </Text>
              </View>
            )
        });
    },
    _getIcon: function (index) {
        console.log(index)
        var code = this.state.list[index * 8] ? this.state.list[index * 8].weather[0].icon : false;
        return IconScheme(code, 50, '#333333');
    },
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
    },
});

module.exports = FiveDaysForecast;

