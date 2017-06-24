const SunCalc = require('suncalc')
const zipcodes = require('zipcodes')
const moment = require('moment-timezone')
const tzlookup = require('zipcode-to-timezone')
const DateHelper = require('./DateHelper.js')

class GoldenHourCalc {    
    constructor(zipCode) {
        this.zipCode = zipCode
        this.location = zipcodes.lookup(this.zipCode)
        this.location.timezone = tzlookup.lookup(this.zipCode)
        this.sunCalcData = SunCalc.getTimes(DateHelper.today(), this.location.latitude, this.location.longitude)
    }
    goldenHourStart() {        
        return moment(this.sunCalcData.goldenHour).tz(this.location.timezone)
    }

    goldenHourEnd() {
        return moment(this.sunCalcData.goldenHourEnd).tz(this.location.timezone)
    }    
}

module.exports = GoldenHourCalc