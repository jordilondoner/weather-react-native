'use strict';

var React = require( 'react-native' );
import ParallaxScrollView from 'react-native-parallax-scroll-view';
var {
      Text,
      View,
      Image
      } = React;
var BasicInfoContainer = require( './basicInfoContainer.js' );
var IconFontAwesome = require( 'react-native-vector-icons/FontAwesome' );
var ApiImages = require( './apiImages.js' );

var Details = React.createClass( {
  getInitialState: function () {
    return {
      url: '../images/details_fallback',
      icon: null
    }
  },
  componentDidMount: function () {
    var self = this;
    //ApiImages( Globalstate.name )
    //  .then( function ( response ) {
    //    if ( self.isMounted() ) {
    //      //leaving out for now, need to come back
    //      self.setState( { url: response.items[ 0 ].media.m } )
    //    }
    //  }.bind( this ) )
    //  .catch( function ( error ) {
    //    console.log( 'error from api images module' )
    //    console.log( error )
    //  } );
  },
  render: function () {
    return (
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
          <BasicInfoContainer />
                )}>
        <View style={{height: 500}}>
          <View
            style={{height: 80, backgroundColor: '#fff', flexDirection: 'row', borderBottomColor: '#aaaaaa', borderBottomWidth: 1, borderStyle: 'solid' }}>
            <View style={{flex: .333333333, backgroundColor: '#fff', paddingTop: 30, alignItems: 'flex-end'}}>
              <Text>
                <IconFontAwesome name="compass" size={20} color="#000" style={{paddingTop: 10}}/> 4 MPH
              </Text>
            </View>
            <View style={{flex: .333333333, backgroundColor: '#fff', paddingTop: 30, alignItems: 'center'}}>
              <Text>
                <IconFontAwesome name="flag" size={20} color="#000" style={{paddingTop: 10}}/> SOUTH
              </Text>
            </View>
            <View style={{flex: .333333333, backgroundColor: '#fff', paddingTop: 30, alignItems: 'flex-start'}}>
              <Text>
                <IconFontAwesome name="umbrella" size={20} color="#000" style={{paddingTop: 10}}/> 23%
              </Text>
            </View>
          </View>
          <View style={{flex:.7, backgroundColor: 'white'}}>
            <Text>hello</Text>
          </View>
        </View>
      </ParallaxScrollView>
    );
  }
} );

module.exports = Details;

