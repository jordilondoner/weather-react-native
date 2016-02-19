/* eslint no-console: 0 */
'use strict';

module.exports = function(){
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('********FROM HELL*********')
          console.log(position)
          console.log('*****************')
        },
        (error) => alert(error.message),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
      );
};