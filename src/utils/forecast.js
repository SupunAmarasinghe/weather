const request = require('request')

const forecast = (latitude, longitiude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b4c22be37fed1b7cef7a1db69de9d67a&query=' + latitude + ',' + longitiude + '&units=f'

    request({url, json:true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error){
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, body.current.temperature)
        }
    })
}

module.exports = forecast
