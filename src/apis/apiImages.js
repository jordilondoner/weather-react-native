var URL = 'http://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=';

module.exports = function(name){
    var url_endpoint = `${URL}${name}`;

    return fetch(url_endpoint)
        .then(function(response){
            var jsonFlickrFeed = data => {
                return data;
            };
            return eval(response._bodyInit);
        })
        .then(function(data){
            return data;
        });
};