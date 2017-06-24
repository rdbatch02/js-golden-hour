const chai = require('chai')
const assert = chai.assert
const GoldenHourCalc = require('../src/GoldenHourCalc.js')
const moment = require('moment')

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
        const dateOffsetSinceJan1 = moment([2017, 0, 1]).diff(moment(), 'days')        
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
})