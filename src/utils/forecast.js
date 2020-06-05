const request = require('request')



const forecast = (lon,lat,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=da223b808613b32c19fd5b663aa32b0a&query='+lon+','+lat+'&units=m'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('unable to fetch the data from Weather server',undefined)
        } else if (response.body.error) {
            callback('Unable to find the location',undefined)
        } else {
            callback(undefined,data = {
                weather:response.body.current.weather_descriptions[0],
                temperature:response.body.current.temperature,
                wind_Speed:response.body.current.wind_speed
            })
        }
    })
}

module.exports = forecast
