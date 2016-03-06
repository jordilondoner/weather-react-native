var URL_1 = 'http://api.openweathermap.org/data/2.5/',
		URL_2 = '?APPID=f269bf95a737cffa16b4e9fed923f02d&units=metric';

module.exports = function(endpoint, latitude, longitude){
	var url_endpoint = `${URL_1}${endpoint}${URL_2}&lat=${latitude}&lon=${longitude}`;

	return fetch(url_endpoint)
		.then(function(response){
			return response.json();
		})
		.then(function(data){
			return data;
		});
};