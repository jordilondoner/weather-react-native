var React = require( 'react-native' );
var {GooglePlacesAutocomplete} = require('react-native-google-places-autocomplete');
var GlobalState = require( './apis/globalStateApi.js' );
var {
      StyleSheet,
      View
      } = React;
//const homePlace = {description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
//const workPlace = {description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};

var Autocomplete = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder='Search'
          minLength={2} // minimum length of text to search
          autoFocus={false}
          fetchDetails={true}
          onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
            GlobalState.set('currentCoordinates', {
              region: {
                longitude: details.geometry.location.lng,
                latitude: details.geometry.location.lat
              }
            });
          }}
          getDefaultValue={() => {
            return ''; // text input default value
          }}
          query={{
            // available options: https://developers.google.com/places/web-service/autocomplete
            key: 'AIzaSyB5j6aCd9iRIkxQV3TwS9skHWRJmeRe10E',
            language: 'en', // language of the results
            types: '(cities)', // default: 'geocode'
          }}
          styles={{
            description: {
              fontWeight: 'bold',
            },
            predefinedPlacesDescription: {
              color: '#1faadb',
            },
            row:{
              backgroundColor: 'white'
            },
            textInputContainer: {
              borderTopColor: 'transparent',
              borderTopWidth: 0
            }
          }}

          currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
          currentLocationLabel="Current location"
          nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
          GoogleReverseGeocodingQuery={{
            // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
          }}
          GooglePlacesSearchQuery={{
            // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
            rankby: 'distance',
            types: 'food',
          }}


          filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities

          //predefinedPlaces={[homePlace, workPlace]}
        />
     </View>
    );
  }
});

var styles = StyleSheet.create( {
  container: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: -2,
    left: 0,
    right: 0,
    width: window.width,
    borderTopColor: '#C9C9CE',
    borderTopWidth: 18
  }
} );
module.exports = Autocomplete;