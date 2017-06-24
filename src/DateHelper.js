"use strict"
const moment = require('moment')

class DateHelper {
    static today() {        
        return moment()
    }

    static tomorrow() {
        return moment().add(1, 'days')
    }

    static fromToday(offset) {
        return moment().add(offset, 'days')
    }
}

module.exports = DateHelper