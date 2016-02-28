var URL = 'http://api.openweathermap.org/data/2.5/forecast?APPID=f269bf95a737cffa16b4e9fed923f02d&units=metric';

module.exports = function(latitude, longitude){
	var url_endpoint = `${URL}&lat=${latitude}&lon=${longitude}`;

	return fetch(url_endpoint)
		.then(function(response){
			return response.json();
		})
		.then(function(data){
			return data;
		});
};