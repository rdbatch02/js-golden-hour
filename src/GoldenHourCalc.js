const SunCalc = require('suncalc')
const zipcodes = require('zipcodes')
const moment = require('moment-timezone')
const tzlookup = require('zipcode-to-timezone')
const DateHelper = require('./DateHelper.js')

class GoldenHourCalc {    
    constructor(zipCode, dateOffset = 0) {
        this.zipCode = zipCode
        this.location = zipcodes.lookup(this.zipCode)        
        if (this.location === undefined) {            
            throw Error("Invalid Zipcode")
        }
        this.location.timezone = tzlookup.lookup(this.zipCode)
        this.sunCalcData = SunCalc.getTimes(DateHelper.fromToday(dateOffset), this.location.latitude, this.location.longitude)
    }
    goldenHourMorning() {        
        return {
            "start": moment(this.sunCalcData.sunrise).startOf('minute').tz(this.location.timezone),
            "end": moment(this.sunCalcData.goldenHourEnd).startOf('minute').tz(this.location.timezone)
        }
    }

    goldenHourEvening() {
        return {
            "start": moment(this.sunCalcData.goldenHour).startOf('minute').tz(this.location.timezone),
            "end": moment(this.sunCalcData.sunset).startOf('minute').tz(this.location.timezone)
        }
    }    
}

module.exports = GoldenHourCalc