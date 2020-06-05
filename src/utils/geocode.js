const request = require('request')

const geocode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' +encodeURIComponent(address)+ '.json?access_token=pk.eyJ1IjoidGhldWx0aW1hdGVwcmFzYWQiLCJhIjoiY2thdGQ0ZnBxMTdzMjJxbXh6YzJpNzdoMCJ9.Wxd3js3c9cXHhqomsO-6PQ'
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to fetch the data from Server', undefined)
        } else if (response.body.message === 'Not Found') {
            callbackg('Location missing', undefined)
        } else {
            callback(undefined, {
                Lon: response.body.features[0].center[0],
                Lat: response.body.features[0].center[1],
                Location: response.body.features[0].place_name
            })
        }
    })
}



module.exports = geocode