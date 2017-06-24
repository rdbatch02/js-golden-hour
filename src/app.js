const GoldenHourCalc = require('./GoldenHourCalc.js')

const zip = process.argv[2]
const goldenHour = new GoldenHourCalc(zip)
console.log(goldenHour.goldenHourStart())