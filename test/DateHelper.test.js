"use strict"
const chai = require('chai')
const assert = chai.assert
const DateHelper = require('../src/DateHelper.js')
const moment = require('moment')

chai.use(require('chai-datetime'))

describe('date helper', () => {
    it('should return today', () => {        
        assert.equalDate(DateHelper.today().toDate(), moment().toDate())
    })

    it('should return tomorrow', () => {
        assert.equalDate(DateHelper.tomorrow().toDate(), moment().add(1, 'days').toDate())
    })

    it('should return 5 days from now', () => {
        assert.equalDate(DateHelper.fromToday(5).toDate(), moment().add(5, 'days').toDate())
    })
})