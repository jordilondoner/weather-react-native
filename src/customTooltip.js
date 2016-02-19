var React = require('react-native');
var {
  StyleSheet,
  Text,
  View
} = React;
var CustomTooltip = function(data){
    return (<View style={{
          alignItems: 'flex-start', 
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          padding: 10,
          top: 0,
          left: 0
        }}>
      <Text style={{fontWeight: 'bold', color: '#fff'}}>
        {data.areaName}
      </Text>
	  <Text style={{fontWeight: 'bold', color: '#fff'}}>
        {data.description}
      </Text>
  	  <Text style={{fontWeight: 'bold', color: '#fff'}}>
        {data.temperature}°
      </Text>
    </View>)
};

var styles = StyleSheet.create({
  map: {
    flex: 1
  },
  tooltip: {
    flex: 1
  }
});

module.exports = CustomTooltip;