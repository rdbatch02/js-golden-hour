const chai = require('chai')
const assert = chai.assert
const GoldenHourCalc = require('../src/GoldenHourCalc.js')
const moment = require('moment-timezone')

chai.use(require('chai-datetime'))

const jan1Times = {
    morning: {
        start: moment([2017, 0, 1, 7, 14]),
        end: moment([2017, 0, 1, 7, 59])
    },
    evening: {
        start: moment([2017, 0, 1, 15, 38]),
        end: moment([2017, 0, 1, 16, 23])
    }
}

describe('GoldenHourCalc', () => {
    let goldenHourCalc
    beforeEach('setup', () => {
        const dateOffsetSinceJan1 = moment([2017, 0, 1]).tz('America/New_York').diff(moment().tz('America/New_York'), 'days')        
        goldenHourCalc = new GoldenHourCalc('02116', dateOffsetSinceJan1)
    })
    it('should return evening golden hour start time', () => {        
        const morning = goldenHourCalc.goldenHourMorning()
        assert.equalTime(morning.start.toDate(), jan1Times.morning.start.toDate())        
    })

    it('should return evening golden hour end time', () => {
        const morning = goldenHourCalc.goldenHourMorning()        
        assert.equalTime(morning.end.toDate(), jan1Times.morning.end.toDate())
    })

    it('should return evening golden hour start time', () => {
        const evening = goldenHourCalc.goldenHourEvening()
        assert.equalTime(evening.start.toDate(), jan1Times.evening.start.toDate())
    })

    it('should return evening golden hour end time', () => {
        const evening = goldenHourCalc.goldenHourEvening()
        assert.equalTime(evening.end.toDate(), jan1Times.evening.end.toDate())
    })

    it('should throw an error with invalid zipcode', () => {        
        assert.throws(() => new GoldenHourCalc('00000'), Error, "Invalid Zipcode")
    })
})