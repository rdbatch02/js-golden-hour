# js-golden-hour [![Build Status](https://travis-ci.org/c1phr/js-golden-hour.svg?branch=master)](https://travis-ci.org/c1phr/js-golden-hour)
Node library to calculate the photographic golden hour by zipcode

## Usage

### cli
```shell
> npm start 85086
Golden hour in Phoenix, AZ on June 24th 2017
--------------------------------------------
Morning:
    Start time: 5:20 am
    End time: 5:56 am
Evening:
    Start time: 7:07 pm
    End time: 7:44 pm
```

### Node
```javascript
const GoldenHourCalc = require('js-golden-hour')
const goldenHour = new GoldenHourCalc(zipcode)

const morning = goldenHour.goldenHourMorning()
// {
//     start: moment.parseZone("2017-06-24T05:20:08.939-07:00"),
//     end: moment.parseZone("2017-06-24T05:56:59.074-07:00")
// }
const evening = goldenHour.goldenHourEvening()
// {
//     start: moment.parseZone("2017-06-24T19:07:21.584-07:00"),
//     end: moment.parseZone("2017-06-24T19:44:11.719-07:00")
// }
```
