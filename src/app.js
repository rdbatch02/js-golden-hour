const GoldenHourCalc = require('./GoldenHourCalc.js')

const zip = process.argv[2]
let dateOffset = process.argv[3]
const isNegativeOffset = process.argv[4] === "reverse" || process.argv[4] === "r"
if (isNegativeOffset) {
    dateOffset = -dateOffset
}
const goldenHour = new GoldenHourCalc(zip, dateOffset)
const location = goldenHour.location
const morning = goldenHour.goldenHourMorning()
const evening = goldenHour.goldenHourEvening()

const heading = "Golden hour in " + location.city + ", " + location.state + " on " + morning.start.format('MMMM Do YYYY')
const hr = Array(heading.length).fill('-').join('')

console.log(heading)
console.log(hr)
console.log("Morning:")
console.log("    Start time: " + morning.start.format('h:mm a'))
console.log("    End time: " + morning.end.format('h:mm a'))
console.log("Evening:")
console.log("    Start time: " + evening.start.format('h:mm a'))
console.log("    End time: " + evening.end.format('h:mm a'))